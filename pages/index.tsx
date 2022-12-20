import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default function Home() {
	const { t } = useTranslation();
	const [readMore, setReadMore] = useState(true);
	const [transaction, setTransaction] = useState(true);
	const [reward, setReward] = useState(true);
	return (
		<Box width="100%">
			<Typography fontWeight="400" fontSize="24px">
				Active Campaigns for GSUp you can join.
			</Typography>
			<Typography fontWeight="400" fontSize="14px" marginTop="10px">
				GSUp is the protocol/community token for the GSUprotocol.
			</Typography>

			<TextField
				variant="standard"
				fullWidth
				sx={{
					backgroundColor: "red",
					borderRadius: "20px",
					height: "31px",
					marginTop: "40px",
					paddingLeft: "15px",
				}}
				InputProps={{ disableUnderline: true }}
				placeholder="Collateral Type"
			/>

			<Box backgroundColor="yellow" width="70%" borderRadius="20px">
				<Box backgroundColor="orange" borderRadius="20px">
					<Box
						display="flex"
						marginTop="20px"
						// width="489px"
						backgroundColor="blue"
						justifyContent="space-between"
						borderRadius="20px"
					>
						<Box padding="20px" width="60%">
							<Typography fontWeight="600" fontSize="16px">
								Mint GSUc from ETH-A
							</Typography>

							<Box
								display="flex"
								marginTop="30px"
								// width="100%"
								justifyContent="space-between"
							>
								<Box>
									<Typography fontWeight="600" fontSize="14px">
										Start Date
									</Typography>
									<Typography fontWeight="400" fontSize="14px">
										ongoing
									</Typography>
									<Button
										variant="contained"
										onClick={() => setReadMore((prev) => !prev)}
										sx={{
											width: "95px",
											height: "24px",
											borderRadius: "20px",
											fontSize: "12px",
											fontWeight: "400",
											textTransform: "none",
											backgroundColor: "red",
											marginTop: "10px",
										}}
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
										2023.11.01
									</Typography>
									<Button
										variant="contained"
										sx={{
											width: "95px",
											height: "24px",
											borderRadius: "20px",
											fontSize: "12px",
											fontWeight: "400",
											textTransform: "none",
											backgroundColor: "red",
											marginTop: "10px",
										}}
									>
										Join now
									</Button>
								</Box>
							</Box>
						</Box>

						<Box
							width="40%"
							borderRadius="20px"
							backgroundColor="yellow"
							padding="20px"
						>
							<Typography fontWeight="600" fontSize="16px">
								Boost Factor
							</Typography>
							<Box
								width="100%"
								display="flex"
								height="10px"
								backgroundColor="white"
								borderRadius="20px"
								marginTop="10px"
							>
								<Box
									width="70%"
									backgroundColor="rgba(233, 74, 116, 1)"
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
										1.4
									</Typography>
								</Box>
								<Box
									width="30%"
									backgroundColor="white"
									borderRadius="20px"
								></Box>
							</Box>
							<Box width="100%" display="flex" justifyContent="space-between">
								<Typography fontWeight="400" fontSize="12px">
									1
								</Typography>
								<Typography fontWeight="400" fontSize="12px">
									2
								</Typography>
							</Box>

							<Typography fontWeight="600" fontSize="16px" marginTop="5px">
								Reward Calculator
							</Typography>

							<Box display="flex" justifyContent="space-between">
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
											backgroundColor: "rgba(233, 74, 116, 1)",
											color: "white",
										}}
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
									<Typography fontWeight="400" fontSize="12px">
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
									>
										100
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>

					{readMore && (
						<Box padding="20px">
							<Typography fontWeight="400" fontSize="16px">
								Campaign:
							</Typography>
							<Typography fontWeight="600" fontSize="16px" marginTop="5px">
								Mint GSUc from ETH-A
							</Typography>
							<Typography fontWeight="400" fontSize="14px">
								(2023.08.01 - 2023.11.01)
							</Typography>

							<Box display="flex" marginTop="20px">
								<Typography fontWeight="600" fontSize="12px" width="100px">
									Reward:
								</Typography>
								<Typography fontWeight="400" fontSize="12px">
									10% * Boost Factor = 14%
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
									ETH-A
								</Typography>
							</Box>

							<Box display="flex">
								<Typography fontWeight="600" fontSize="12px" width="100px">
									Time-sequence:
								</Typography>
								<Typography fontWeight="400" fontSize="12px">
									10 days (Nine time-sequneces in the full period)
								</Typography>
							</Box>

							<Box display="flex">
								<Typography fontWeight="600" fontSize="12px" width="100px">
									Campaign max.:
								</Typography>
								<Typography fontWeight="400" fontSize="12px">
									Up to 20M GSUc minted
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

							<Box
								display="flex"
								justifyContent="space-between"
								marginTop="10px"
							>
								<Box
									sx={{ cursor: "pointer" }}
									onClick={() => setTransaction((prev) => !prev)}
								>
									<Typography fontWeight="400" fontSize="12px" color="white">
										My Transaction
									</Typography>
								</Box>

								<Box
									sx={{ cursor: "pointer" }}
									onClick={() => setReward((prev) => !prev)}
								>
									<Typography fontWeight="400" fontSize="12px" color="white">
										My Rewards
									</Typography>
								</Box>
							</Box>
						</Box>
					)}
				</Box>

				{transaction && (
					<Box padding="20px">
						<Box display="flex" justifyContent="space-between">
							<Typography fontWeight="400" fontSize="16px">
								My transactions
							</Typography>

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
								InputProps={{ disableUnderline: true }}
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

				{reward && (
					<Box padding="20px">
						<Box display="flex" justifyContent="space-between">
							<Typography fontWeight="400" fontSize="16px">
								My reward history
							</Typography>

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
								InputProps={{ disableUnderline: true }}
								// placeholder="Collateral Type"
							/>
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
		</Box>
	);
}
