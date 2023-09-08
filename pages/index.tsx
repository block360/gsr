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

	const [campaings, setCampaings] = useState();

	const [vaultID, setVaultId] = useState([]);

	if (web3Context?.status === "connected") {
		var { account } = web3Context;
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

				// console.log(res, "res1", val);
				// res["ilk"] = val

				// campaignData = [...campaignData,...res];
				// campaignData = res
				// setCampaings((prev:any) =>{"ETH-A":res});
				setCampaings((prevState) => ({
					...prevState,
					[val]: res,
				}));

				// let prev = {"ETH":[[2,3,4],[1,2,3]]}
				// console.log({...prev},"lala");
			});
		};
		getCampaignData();
	}, []);

	useEffect(() => {
		const getId = async () => {
			const res = await axios.get(
				`${process.env.API_HOST}/reward/cdpids/${account}`
			);
		};

		if (web3Context?.status === "connected") getId();
	}, [web3Context?.status]);

	return (
		console.log(campaings, "campaings"),
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

				{campaings &&
					Object.keys(campaings).map((ilk) =>
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
									endDate={moment.unix(val?.endTimestamp).format("YYYY/MM/DD")}
									id={index}
									ilk={ilk}
									timeSequence={val?.timeSequence}
									allowance={val?.allowance}
								/>
							);
						})
					)}
			</Box>
		)
	);
}
