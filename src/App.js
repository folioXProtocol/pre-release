import CoverArt from "./assets/cover-art.png";
import LogoLight from "./assets/logo-light.png";
import LogoDark from "./assets/logo-dark.png";
import Litepaper from "./folioX_litepaper.pdf";

import { PiSunDimFill, PiMoonFill } from "react-icons/pi";

import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState, useEffect } from "react";

function App() {
	const mailchimpUrl = `https://foliox.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const isDarkMode = localStorage.getItem("isDark") === true;
		setIsDark(isDarkMode);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
		localStorage.setItem("isDark", isDark);
	}, [isDark]);

	const toggleDarkMode = () => {
		setIsDark((prevBool) => !prevBool);
	}

	return (
		<div
			className="relative flex flex-col w-full min-h-[100vh] bg-[url('./assets/grid-light.png')] dark:bg-[url('./assets/grid-dark.png')]">
			<button
				className="absolute right-5 top-5 md:top-9 md:right-9 p-2 bg-dark-500 text-light-100 rounded dark:bg-light-100 dark:text-dark-500"
				onClick={toggleDarkMode}>
				{isDark ? <PiSunDimFill /> : <PiMoonFill />}
			</button>
			<div className="relative flex-1 p-5 w-full md:w-10/12 m-auto max-w-[100ch] text-dark-500 dark:text-light-100 transition-all duration-200 ease-in-out">
				<img
					className="w-[10rem] m-auto"
					src={isDark ? LogoDark : LogoLight}
					alt="logo"
				/>
				<div className="flex flex-col md:flex-row justify-center items-center md:gap-5 md:mt-8 mt-5">
					<div className="w-10/12 md:w-6/12 bg-[radial-gradient(circle_at_center, rgba(52 84 209, 0.5), rgba(52 84 209, 0))">
						<img className="w-full" src={CoverArt} alt="cover" />
					</div>
					<div className="md:w-6/12 md:mt-[3rem] text-center md:text-left">
						<h1 className="md:text-[3rem] text-[2rem] font-extrabold md:leading-[3rem] leading-9 mb-4">
							Intent Based{" "}
							<span className="text-primary-500 dark:text-primary-400">
								Cross Chain
							</span>{" "}
							Portfolio Management
						</h1>
						<p className="text-xl font-medium mb-5">
							folioX, Your One-Stop Portfolio Powerhouse.
						</p>
						<a
							href={Litepaper}
							target="_blank"
							rel="noreferrer noopener"
							className="bg-primary-500 dark:bg-primary-400 font-semibold text-light-100 py-2 px-4 rounded hover:bg-primary-400 active:bg-primary-600 transition-all duration-200 ease-in-out">
							Read Litepaper
						</a>
					</div>
				</div>
				<div className="text-center mt-5 text-xl">
					Build Wealth effortlessly with our
					<br />
					<span className="font-semibold"> Autonomous Intent Framework</span>—
					<p className="italic leading-tight mt-2">
						No bridge or protocol worries, we curate the best for you!
					</p>
				</div>
				<div className="m-auto w-fit md:mt-[5em] mt-10 text-center">
					<span className="text-2xl font-semibold">
						Sign Up for{" "}
						<span className="text-primary-500 dark:text-primary-400">
							Early access
						</span>{" "}
						and Stay updated with folio
						<span className="text-primary-500 dark:text-primary-400">X</span>
					</span>
					<MailchimpSubscribe
						url={mailchimpUrl}
						render={({ subscribe, status, message }) => (
							<SignUpForm
								status={status}
								message={message}
								onValidated={(formData) => subscribe(formData)}
								isDark={isDark}
							/>
						)}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
