import {
	Box,
	Button,
	InputAdornment,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAppContext } from "./AppContextProvider";
import { useObservable } from "helpers/observableHook";
import axios from "axios";

export default function RewardCard({
	type,
	startDate,
	endDate,
	id,
	ilk,
	timeSequence,
	allowance,
}: {
	type: "inprogress" | "ended";
	startDate: string;
	endDate: string;
	id: number;
	ilk: string;
	timeSequence: number;
	allowance:number;
}) {
	const [readMore, setReadMore] = useState(
		type === "inprogress" ? true : false
	);
	const [transaction, setTransaction] = useState(false);
	const [reward, setReward] = useState(false);

	const [rewardData, setRewardData] =
		useState<{ rate: number; minimum: number; maximum: number }>();

	const { web3Context$ } = useAppContext();
	const [web3Context] = useObservable(web3Context$);

	if (web3Context?.status === "connected") {
		var { account } = web3Context;
	}

	useEffect(() => {
		const getRate = async () => {
			// const res = await axios.get(
			// 	`${process.env.API_HOST}/reward/rate?ilk=${"ETH-A"}&campaignId=${id}`
			// );

			setRewardData({ rate: 1.4, minimum: 1, maximum: 2 });
		};

		getRate();
	}, []);

	return (
		<Box display="flex" gap={2} marginTop="20px">
			<Box
				sx={{
					background:
						// "linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(233, 74, 116, 0.4))",
						"linear-gradient(180deg, #FFFFFF 45.73%, #E94A74 146.13%)",
				}}
				width="70%"
				borderRadius="20px"
			>
				<Box
					sx={{
						background:
							// "linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(233, 74, 116, 0.4))",
							"linear-gradient(180deg, #FFFFFF 45.73%, #E94A74 146.13%)",
					}}
					// width="70%"
					borderRadius="20px"
				>
					<Box
						sx={{
							background:
								// "linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(233, 74, 116, 0.4))",
								"linear-gradient(180deg, #FFFFFF 45.73%, #E94A74 146.13%)",
						}}
						borderRadius="20px"
					>
						<Box
							display="flex"
							// width="489px"
							// backgroundColor="blue"
							sx={
								type === "inprogress"
									? {
											background:
												"linear-gradient(to right, rgba(179, 95, 255, 0.4), rgba(233, 74, 116, 0.4))",
									  }
									: {
											background: "#F5EBF1",
									  }
							}
							justifyContent="space-between"
							borderRadius="20px"
						>
							<Box padding="20px" width={type === "inprogress" ? "60%" : "50%"}>
								<Box display="flex">
									<Typography
										fontWeight="600"
										fontSize="16px"
										marginRight="20px"
									>
										Mint GSUc from {ilk}
									</Typography>
									<Image
										src="/static/img/ETH-A.png"
										width="24px"
										height="24px"
									/>
								</Box>

								<Box
									display="flex"
									marginTop="47px"
									// width="100%"
									justifyContent="space-between"
								>
									<Box>
										<Typography fontWeight="600" fontSize="14px">
											Start Date
										</Typography>
										<Typography fontWeight="400" fontSize="14px">
											{startDate}
										</Typography>
										<Button
											variant="contained"
											onClick={() => {
												setReadMore((prev) => !prev);
												setTransaction(false);
												setReward(false);
											}}
											sx={{
												width: "95px",
												height: "24px",
												borderRadius: "20px",
												fontSize: "12px",
												fontWeight: "400",
												textTransform: "none",
												backgroundColor: "white",
												marginTop: "10px",
												color: "black",
											}}
											disableElevation
										>
											Read more
										</Button>
									</Box>

									<Box
										display="flex"
										flexDirection="column"
										justifyContent="center"
										alignItems="center"
									>
										<Typography fontWeight="600" fontSize="14px">
											End Date
										</Typography>
										<Typography fontWeight="400" fontSize="14px">
											{endDate}
										</Typography>
										{type === "inprogress" ? (
											<Button
												variant="contained"
												sx={{
													width: "95px",
													height: "24px",
													borderRadius: "20px",
													fontSize: "12px",
													fontWeight: "400",
													textTransform: "none",
													backgroundColor: "rgba(236, 111, 168, 1)",
													marginTop: "10px",
												}}
												disableElevation
											>
												Join now
											</Button>
										) : (
											<Button
												variant="contained"
												sx={{
													width: "95px",
													height: "24px",
													borderRadius: "20px",
													fontSize: "12px",
													fontWeight: "400",
													textTransform: "none",
													backgroundColor: "rgba(140, 140, 140, 1)",
													marginTop: "10px",
												}}
												disableElevation
											>
												Closed
											</Button>
										)}
									</Box>
								</Box>
							</Box>

							{type === "inprogress" ? (
								<Box
									width="40%"
									borderRadius="20px"
									sx={{
										backgroundColor: "rgba(248, 247, 247, 0.8)",
									}}
									padding="20px"
								>
									<Typography fontWeight="600" fontSize="16px">
										Boost Factor
									</Typography>
									<Box
										width="100%"
										display="flex"
										height="10px"
										// backgroundColor="white"
										borderRadius="20px"
										marginTop="10px"
									>
										<Box
											width="70%"
											sx={{
												backgroundColor: "rgba(233, 74, 116, 1)",
											}}
											borderRadius="20px"
											display="flex"
											justifyContent="end"
										>
											<Typography
												fontWeight="400"
												fontSize="8px"
												paddingRight="5px"
												color="white"
											>
												{rewardData?.rate}
											</Typography>
										</Box>
										<Box
											width="30%"
											sx={{
												backgroundColor: "white",
											}}
											borderRadius="20px"
										></Box>
									</Box>
									<Box
										width="100%"
										display="flex"
										justifyContent="space-between"
									>
										<Typography fontWeight="400" fontSize="12px">
											{rewardData?.maximum}
										</Typography>
										<Typography fontWeight="400" fontSize="12px">
											{rewardData?.minimum}
										</Typography>
									</Box>

									<Typography fontWeight="600" fontSize="16px" marginTop="5px">
										Reward Calculator
									</Typography>

									<Box
										display="flex"
										justifyContent="space-between"
										marginTop="8px"
									>
										<Box
											display="flex"
											flexDirection="column"
											justifyContent="center"
											alignItems="center"
										>
											<Typography fontWeight="400" fontSize="12px">
												I mint GSUc
											</Typography>

											<Box
												display="flex"
												justifyContent="center"
												alignItems="center"
												sx={{
													width: "100%",
													height: "24px",
													borderRadius: "20px",
													fontSize: "12px",
													fontWeight: "400",
													textTransform: "none",
													backgroundColor: "transparent",
													color: "black",
													borderStyle: "solid",
													borderWidth: "3px",
													borderColor: "rgba(233, 74, 116, 1)",
												}}
												marginTop="5px"
											>
												100
											</Box>
										</Box>

										<Box
											display="flex"
											flexDirection="column"
											justifyContent="center"
											alignItems="center"
										>
											<Typography
												fontWeight="400"
												fontSize="12px"
												// marginTop="8px"
											>
												I'll get GSUp
											</Typography>
											<Box
												display="flex"
												justifyContent="center"
												alignItems="center"
												sx={{
													width: "100%",
													height: "24px",
													borderRadius: "20px",
													fontSize: "12px",
													fontWeight: "400",
													textTransform: "none",
													backgroundColor: "rgba(233, 74, 116, 1)",
													color: "white",
												}}
												marginTop="5px"
											>
												{100 * 1.4}
											</Box>
										</Box>
									</Box>
								</Box>
							) : (
								<Box width="40%" padding="20px" display="flex">
									<Box height="100%" display="flex" alignItems="end">
										<Button
											variant="contained"
											sx={{
												width: "95px",
												height: "24px",
												borderRadius: "20px",
												fontSize: "12px",
												fontWeight: "400",
												textTransform: "none",
												backgroundColor: "rgba(236, 111, 168, 1)",
												marginTop: "10px",
											}}
											disableElevation
										>
											Claim
										</Button>
									</Box>

									<img
										src="/static/img/ETH!lg.png"
										height="128px"
										width="128px"
									/>
								</Box>
							)}
						</Box>

						{readMore && (
							<Box padding="20px">
								<Typography fontWeight="400" fontSize="16px">
									Campaign:
								</Typography>
								<Typography fontWeight="600" fontSize="16px" marginTop="3px">
									Mint GSUc from {ilk}
								</Typography>
								<Typography fontWeight="400" fontSize="14px">
									({startDate} - {endDate})
								</Typography>

								<Box display="flex" marginTop="20px">
									<Typography fontWeight="600" fontSize="12px" width="100px">
										Reward:
									</Typography>
									<Typography fontWeight="400" fontSize="12px">
										10% * Boost Factor ={" "}
										<span style={{ fontWeight: "700" }}>
											{rewardData?.rate * 10}%
										</span>
									</Typography>
								</Box>

								<Box display="flex">
									<Typography fontWeight="600" fontSize="12px" width="100px">
										Activity:
									</Typography>
									<Typography fontWeight="400" fontSize="12px">
										Minting GSUc
									</Typography>
								</Box>

								<Box display="flex">
									<Typography fontWeight="600" fontSize="12px" width="100px">
										Vault:
									</Typography>
									<Typography fontWeight="400" fontSize="12px">
										{ilk}
									</Typography>
								</Box>

								<Box display="flex">
									<Typography fontWeight="600" fontSize="12px" width="100px">
										Time-sequence:
									</Typography>
									<Box display="flex">
										<Typography fontWeight="400" fontSize="12px">
											{timeSequence} days (Nine time-sequneces in the full period)
										</Typography>
										<Tooltip title="Time sequence is evenly distributed between start and the end date of the campaign. When a user increases their debt position, the current rate of the day is applied, if there is a boost factor it will be applied too, otherwise the base reward is applied for the time sequence.When a user decreases their debt position, they will get slashed from their reward for the previous time sequence as well.">
											<Image
												src="/static/img/info.png"
												width="8px"
												height="8px"
												// style={{minHeight:"8px",minWidth:"8px",maxWidth:"8px",maxHeight:"8px"}}
												layout="fixed"
											/>
										</Tooltip>
									</Box>
								</Box>

								<Box display="flex">
									<Typography fontWeight="600" fontSize="12px" width="100px">
										Campaign max.:
									</Typography>
									<Typography fontWeight="400" fontSize="12px">
										Up to {allowance} GSUc minted
									</Typography>
								</Box>

								<Box display="flex">
									<Typography fontWeight="600" fontSize="12px" width="100px">
										Release:
									</Typography>
									<Typography fontWeight="400" fontSize="12px">
										1/10 monthly, starting 2023.10.01
									</Typography>
								</Box>

								{web3Context?.status === "connected" && (
									<Box
										display="flex"
										justifyContent="space-between"
										marginTop="10px"
									>
										<Box
											sx={{ cursor: "pointer" }}
											onClick={() => setTransaction((prev) => !prev)}
											display="flex"
											// padding="2px"
										>
											<Image
												src="/static/img/Collapse.png"
												height="10px"
												width="21px"
												layout="fixed"
												style={{ marginTop: "3px" }}
											/>
											<Typography
												fontWeight="400"
												fontSize="12px"
												color="white"
												marginLeft="10px"
											>
												My Transaction
											</Typography>
										</Box>

										<Box
											sx={{ cursor: "pointer" }}
											onClick={() => setReward((prev) => !prev)}
											display="flex"
										>
											<Image
												src="/static/img/Collapse.png"
												height="10px"
												width="21px"
												layout="fixed"
												style={{ marginTop: "3px" }}
											/>
											<Typography
												fontWeight="400"
												fontSize="12px"
												color="white"
												marginLeft="10px"
											>
												My Rewards
											</Typography>
										</Box>
									</Box>
								)}
							</Box>
						)}
					</Box>

					{transaction && (
						<Box padding="20px">
							<Box display="flex" justifyContent="space-between">
								<Box display="flex">
									<Typography
										fontWeight="400"
										fontSize="16px"
										marginRight="10px"
									>
										My transactions
									</Typography>

									<img
										src="/static/img/gsulogo.png"
										height="19px"
										width="19px"
										// layout="fixed"
										style={{ marginTop: "2px" }}
									/>
								</Box>

								<TextField
									variant="standard"
									// fullWidth
									sx={{
										backgroundColor: "white",
										borderRadius: "20px",
										height: "20px",
										// marginTop: "40px",
										paddingLeft: "15px",
										fontSize: "8px",
									}}
									InputProps={{
										disableUnderline: true,
										endAdornment: (
											<InputAdornment position="end">
												<img
													src="/static/img/search.png"
													style={{ marginTop: "-8px", marginRight: "3px" }}
												/>
											</InputAdornment>
										),
									}}
									// placeholder="Collateral Type"
								/>
							</Box>

							<Typography fontWeight="700" fontSize="12px" marginTop="10px">
								(Vault ID)
							</Typography>

							<Box display="flex" width="100%">
								<Typography fontWeight="700" fontSize="12px" width="24%">
									Date (dd/mm)
								</Typography>

								<Typography fontWeight="700" fontSize="12px" width="19%">
									Action
								</Typography>

								<Typography fontWeight="700" fontSize="12px" width="19%">
									Boast Factor
								</Typography>

								<Typography fontWeight="700" fontSize="12px" width="19%">
									Amount
								</Typography>

								<Typography fontWeight="700" fontSize="12px" width="19%">
									Balance
								</Typography>
							</Box>

							<Box display="flex" width="100%">
								<Typography fontWeight="400" fontSize="12px" width="24%">
									1/8
								</Typography>

								<Typography fontWeight="400" fontSize="12px" width="19%">
									Minted
								</Typography>

								<Typography fontWeight="400" fontSize="12px" width="19%">
									2.0x
								</Typography>

								<Typography fontWeight="400" fontSize="12px" width="19%">
									10000
								</Typography>

								<Typography fontWeight="400" fontSize="12px" width="19%">
									10000
								</Typography>
							</Box>
						</Box>
					)}
				</Box>

				{reward && (
					<Box padding="20px">
						<Box display="flex" justifyContent="space-between">
							<Box display="flex">
								<Typography fontWeight="400" fontSize="16px" marginRight="10px">
									My reward history
								</Typography>

								<img
									src="/static/img/gsulogo.png"
									height="19px"
									width="19px"
									// layout="fixed"
									style={{ marginTop: "2px" }}
								/>
							</Box>
						</Box>

						{/* <Typography fontWeight="700" fontSize="12px" marginTop="10px">
							(Vault ID)
						</Typography> */}

						<Box display="flex" width="100%" marginTop="10px">
							<Typography fontWeight="700" fontSize="12px" width="24%">
								Date (dd/mm)
							</Typography>

							<Typography fontWeight="700" fontSize="12px" width="19%">
								Action
							</Typography>

							<Typography fontWeight="700" fontSize="12px" width="19%">
								Boast Factor
							</Typography>

							<Typography fontWeight="700" fontSize="12px" width="19%">
								Amount
							</Typography>

							<Typography fontWeight="700" fontSize="12px" width="19%">
								Balance
							</Typography>
						</Box>

						<Box display="flex" width="100%">
							<Typography fontWeight="400" fontSize="12px" width="24%">
								1/8
							</Typography>

							<Typography fontWeight="400" fontSize="12px" width="19%">
								Minted
							</Typography>

							<Typography fontWeight="400" fontSize="12px" width="19%">
								2.0x
							</Typography>

							<Typography fontWeight="400" fontSize="12px" width="19%">
								10000
							</Typography>

							<Typography fontWeight="400" fontSize="12px" width="19%">
								10000
							</Typography>
						</Box>
					</Box>
				)}
			</Box>

			<Box
				width="30%"
				height="187px"
				borderRadius="20px"
				padding="20px"
				sx={{
					background:
						"linear-gradient(to right, rgba(179, 95, 255, 0.4), rgba(233, 74, 116, 0.4))",
				}}
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
			>
				{web3Context?.status === "connected" ? (
					<>
						{type === "inprogress" && (
							<Box width="100%" display="flex" justifyContent="end">
								<img src="/static/img/refresh.png" width="28px" height="28px" />
							</Box>
						)}
						<Box>
							<Typography fontWeight="400" fontSize="12px">
								My Rewards in process:
							</Typography>
							<Typography fontWeight="400" fontSize="12px">
								GSUp 1234
							</Typography>
						</Box>
						<Box>
							<Typography fontWeight="400" fontSize="12px">
								My Rewards confirmed:
							</Typography>
							<Typography fontWeight="400" fontSize="12px">
								GSUp 7110
							</Typography>
						</Box>

						{type === "ended" && (
							<Box>
								<Typography fontWeight="400" fontSize="12px">
									My next Reward release:
								</Typography>
								<Typography fontWeight="400" fontSize="12px">
									01/09/23
								</Typography>
							</Box>
						)}

						<Typography fontWeight="400" fontSize="12px">
							As of: 00:00 Date: 00/00/00
						</Typography>
					</>
				) : (
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						height="100%"
					>
						<Typography fontWeight="400" fontSize="12px">
							{type === "inprogress"
								? "Join this campaign to see your rewards."
								: "This campaign has ended."}
						</Typography>
					</Box>
				)}
			</Box>
		</Box>
	);
}
