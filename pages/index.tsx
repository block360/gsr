import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import RewardCard from "components/RewardCard";
import { useAppContext } from "components/AppContextProvider";
import { useObservable } from "helpers/observableHook";
import { formatAddress } from "helpers/formatters/format";
import { useEffect, useState } from "react";
import cdpRewardAbi from "../blockchain/abi/cdp_reward.json";
import { connectToContract, getWeb3 } from "../blockchain/web3helper";
import axios from "axios";
import moment from "moment";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const ilks = ["ETH-A", "ETH-B", "ETH-C", "USDT-A"];

export default function Home() {
	const { t } = useTranslation();
	const { web3Context$ } = useAppContext();
	const [web3Context] = useObservable(web3Context$);

	const [search, setSearch] = useState("");
	const [searchData, setSearchData] = useState(null);

	const [campaings, setCampaings] = useState();

	const [vaultIds, setVaultIds] = useState<
		{
			cdpId: number;
			status: number;
			ilkName?: string;
			error?: string;
		}[]
	>([]);

	if (web3Context?.status === "connected") {
		// var { account } = web3Context;
		var account = "0xd33bf7c2983f51dbc4abbf21850fa76d652329c8";
	}

	useEffect(() => {
		const getCampaignData = () => {
			const web3 = getWeb3();

			ilks.forEach(async (val) => {
				const _contract = await connectToContract(
					cdpRewardAbi,
					"0xc9C30F0AA9B632BA8AaB9b27E4FEC8c0C3AcF7Ce"
				);

				let res = await _contract.methods
					.getConfigs(web3.utils.asciiToHex(val))
					.call();

				setCampaings((prevState) => ({
					...prevState,
					[val]: res,
				}));
			});
		};
		getCampaignData();
	}, []);

	useEffect(() => {
		const getId = async () => {
			const cdpIds = await axios.get(
				`${"http://188.34.186.79:5000"}/reward/cdpids/${account}`
			);
			setVaultIds(cdpIds.data);

			// let ids:string;

			// vaultIds.forEach(ele=>{
			// 	if(ids){
			// 		ids = "ids="+ele.cdpId
			// 	}else{
			// 		ids = ids + "&ids=" + ele.cdpId
			// 	}
			// })

			// let rewards = await axios.get(
			// 	`${"http://188.34.186.79:5000"}/reward/cdpids/${account}`
			// );
		};

		if (web3Context?.status === "connected") getId();
	}, [web3Context?.status]);

	// useEffect(()=>{},[])

	return (
		console.log(searchData, "campaings"),
		(
			<Box width="100%">
				<Typography fontWeight="400" fontSize="24px">
					{web3Context?.status === "connected" ? (
						<>
							My rewards overview: <span>{formatAddress(account, 6)}</span>
						</>
					) : (
						"Active Campaigns for GSUp you can join."
					)}
				</Typography>
				<Typography fontWeight="400" fontSize="14px" marginTop="10px">
					GSUp is the protocol/community token for the GSUprotocol.
				</Typography>

				{web3Context?.status === "connected" && (
					<Typography fontWeight="400" fontSize="14px" marginTop="10px">
						💡 | You automatically become eligible for rewards when you are
						active in line with the each campaign.
					</Typography>
				)}

				<TextField
					variant="standard"
					fullWidth
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						console.log(e.target.value, "e.target.value");

						if (e.target.value === "") {
							setSearchData(null);
						} else {
							if (campaings) {
								console.log("e.target.value 1");

								const filterData = Object.keys(campaings).filter((campaing) => {
									console.log(
										campaing,
										campaing
											.toLowerCase()
											.includes(e.target.value.toLowerCase()),
										"check"
									);

									return campaing.toLowerCase().includes(e.target.value.toLowerCase());
								});

								console.log(filterData, "filterData");
								

								filterData.map((val) =>
									setSearchData((prevState) => ({
										...prevState,
										[val]: campaings[val],
									}))
								);
							}
						}
					}}
					sx={
						web3Context?.status === "connected"
							? {
									backgroundColor: "white",
									borderRadius: "20px",
									height: "31px",
									marginTop: "10px",
									paddingLeft: "15px",
							  }
							: {
									backgroundColor: "white",
									borderRadius: "20px",
									height: "31px",
									marginTop: "40px",
									paddingLeft: "15px",
							  }
					}
					InputProps={{
						disableUnderline: true,
						endAdornment: (
							<InputAdornment position="end">
								<img
									src="/static/img/search.png"
									style={{ marginTop: "-2px", marginRight: "5px" }}
									height="14px"
									width="14px"
								/>
							</InputAdornment>
						),
					}}
					placeholder="Collateral Type"
				/>

				{/* <RewardCard type="inprogress" />
				<RewardCard type="ended" /> */}
				{/* {campaings && Object.keys(campaings).map((ilk,index) => {
					// console.log(moment.unix(val.endTimestamp).diff( Date.now()),"check");
					return campaings?[ilk].map((val, index) => {
						const ongoing =
							moment.unix(val?.endTimestamp).diff(Date.now()) > 0 ? true : false;

						return (
							// <RewardCard type={(new Date.now()) val.endTimestamp} />
							<RewardCard
								type={ongoing ? "inprogress" : "ended"}
								startDate={
									ongoing
										? "ongoing"
										: moment.unix(val?.startTimestamp).format("YYYY/MM/DD")
								}
								endDate={moment.unix(val?.endTimestamp).format("YYYY/MM/DD")}
								id={index}
							/>
						);
					});

				})} */}

				{campaings && searchData === null
					? Object.keys(campaings).map((ilk) =>
							campaings[ilk].map((val, index) => {
								const ongoing =
									moment.unix(val?.endTimestamp).diff(Date.now()) > 0
										? true
										: false;

								return (
									// <RewardCard type={(new Date.now()) val.endTimestamp} />
									<RewardCard
										type={ongoing ? "inprogress" : "ended"}
										startDate={moment
											.unix(val?.startTimestamp)
											.format("YYYY/MM/DD")}
										endDate={moment
											.unix(val?.endTimestamp)
											.format("YYYY/MM/DD")}
										id={index}
										ilk={ilk}
										timeSequence={val?.timeSequence}
										allowance={val?.allowance}
										vaultIds={vaultIds}
									/>
								);
							})
					  )
					: searchData &&
					  Object.keys(searchData).map((ilk) =>
							searchData[ilk].map((val, index) => {
								const ongoing =
									moment.unix(val?.endTimestamp).diff(Date.now()) > 0
										? true
										: false;

								return (
									// <RewardCard type={(new Date.now()) val.endTimestamp} />
									<RewardCard
										type={ongoing ? "inprogress" : "ended"}
										startDate={moment
											.unix(val?.startTimestamp)
											.format("YYYY/MM/DD")}
										endDate={moment
											.unix(val?.endTimestamp)
											.format("YYYY/MM/DD")}
										id={index}
										ilk={ilk}
										timeSequence={val?.timeSequence}
										allowance={val?.allowance}
										vaultIds={vaultIds}
									/>
								);
							})
					  )}
			</Box>
		)
	);
}
