import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import {
	Box,
	Button,
	InputAdornment,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import RewardCard from "components/RewardCard";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default function Home() {
	const { t } = useTranslation();

	return (
		<Box
			width="100%"
		>
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
					backgroundColor: "white",
					borderRadius: "20px",
					height: "31px",
					marginTop: "40px",
					paddingLeft: "15px",
				}}
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

			<RewardCard type="inprogress" />
			<RewardCard type="ended" />
		</Box>
	);
}
