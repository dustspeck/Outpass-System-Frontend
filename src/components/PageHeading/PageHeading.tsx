import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { MdOutlineNavigateNext } from "react-icons/md";
import styles from "../../assets/styles/jss/components/DashboardLayoutStyles/PageHeadingStyles";

interface IPageHeadingProps {
  heading: string;
  subHeading?: string;
  children?: ReactNode;
  breadcrumbs?: string[] | undefined;
}
export const PageHeading: React.FC<IPageHeadingProps> = ({
  heading,
  subHeading,
  children,
  breadcrumbs,
}) => {
  return (
    <>
      <header
        className="w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out 
        py-2 bg-[#f8fafc]"
      >
        <Container maxWidth="xl">
          <div className="mx-auto">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Site branding */}
              <div className="flex-shrink-0 mr-4">
                <Link to="/">
                  <div className="flex items-center">
                    <p className="text-gray-500 font-medium text-sm">
                      OUTPASS SYSTEM
                    </p>
                  </div>
                </Link>
              </div>

              {/* Site navigation */}
              <nav className="flex flex-grow">
                <ul className="flex flex-grow justify-end flex-wrap items-center">
                  <li>
                    <button
                      type="button"
                      className="text-red-500 font-semibold uppercase text-sm p-4 rounded"
                    >
                      <Link to="/">Logout</Link>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </header>
      <Box sx={styles.root}>
        <Container maxWidth="xl" sx={styles.container}>
          <Stack flexGrow={1} spacing={1}>
            <Typography variant="h4" sx={styles.heading}>
              {heading}
            </Typography>
            {subHeading !== "" && (
              <Typography color="text.secondary" variant="subtitle1">
                {subHeading}
              </Typography>
            )}
            {breadcrumbs && (
              <Breadcrumbs
                separator={<MdOutlineNavigateNext fontSize={16} />}
                aria-label="breadcrumb"
              >
                {breadcrumbs.map(crumb => (
                  <Typography
                    variant="body2"
                    key={crumb}
                    color="text.secondary"
                  >
                    {crumb}
                  </Typography>
                ))}
              </Breadcrumbs>
            )}
          </Stack>

          <Stack direction="row" spacing={1}>
            {children}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

PageHeading.defaultProps = {
  children: null,
  subHeading: "",
  breadcrumbs: undefined,
};
