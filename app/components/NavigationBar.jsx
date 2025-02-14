"use client";

import { AppBar, Toolbar, Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const NavigationBar = () => {
  const pathName = usePathname();

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 4,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <Link
            style={{
              fontWeight: pathName == "/" && 900,
              fontSize: pathName == "/" && "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
            href={"/"}
          >
            Home{" "}
            {pathName == "/" ? (
              <HomeIcon sx={{ ml: 1 }} />
            ) : (
              <HomeOutlinedIcon sx={{ ml: 1 }} />
            )}
          </Link>
          <Link
            style={{
              fontWeight: pathName == "/projects" && 900,
              fontSize: pathName == "/projects" && "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
            href={"/projects"}
          >
            Projects{" "}
            {pathName == "/projects" ? (
              <WorkHistoryIcon sx={{ ml: 1 }} />
            ) : (
              <WorkHistoryOutlinedIcon sx={{ ml: 1 }} />
            )}
          </Link>
          <Link
            style={{
              fontWeight: pathName == "/about" && 900,
              fontSize: pathName == "/about" && "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
            href={"/about"}
          >
            About{" "}
            {pathName == "/about" ? (
              <InfoIcon sx={{ ml: 1 }} />
            ) : (
              <InfoOutlinedIcon sx={{ ml: 1 }} />
            )}
          </Link>
          <Link
            style={{
              fontWeight: pathName == "/contact" && 900,
              fontSize: pathName == "/contact" && "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
            href={"/contact"}
          >
            Contact{" "}
            {pathName == "/contact" ? (
              <ContactMailIcon sx={{ ml: 1 }} />
            ) : (
              <ContactMailOutlinedIcon sx={{ ml: 1 }} />
            )}
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
