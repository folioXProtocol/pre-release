import CoverArt from "./assets/cover-art.png";
import LogoLight from "./assets/logo-light.png";
import Litepaper from "./folioX_Litepaper.pdf";

import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

import MailchimpSubscribe from "react-mailchimp-subscribe";

function App() {
	const mailchimpUrl = `https://foliox.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

	return (
		<div className="flex flex-col w-full min-h-[100vh]">
			<div className="relative flex-1 p-5 w-full md:w-10/12 m-auto max-w-[100ch] text-dark-500 transition-all duration-200 ease-in-out">
				<img className="w-[10rem] m-auto" src={LogoLight} alt="logo" />
				<div className="flex flex-col md:flex-row justify-center items-center md:gap-5 md:mt-8 mt-5">
					<div className="w-10/12 md:w-6/12 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(#B5C1F0, 0.8)_0%,rgba(255,255,255,0.00)_100%)]">
						<img className="w-full" src={CoverArt} alt="cover" />
					</div>
					<div className="md:w-6/12 md:mt-[3rem] text-center md:text-left">
						<h1 className="md:text-[3rem] text-[2rem] font-extrabold md:leading-[3rem] leading-9 mb-4">
							Intent Based <span className="text-primary-500">Cross Chain</span>{" "}
							Portfolio Management
						</h1>
						<p className="text-xl font-medium mb-5">
							folioX, Your One-Stop Portfolio Powerhouse.
						</p>
						<a
							href={Litepaper}
							target="_blank"
							rel="noreferrer noopener"
							className="bg-primary-500 font-semibold text-light-100 py-2 px-4 rounded hover:bg-primary-400 active:bg-primary-600 transition-all duration-200 ease-in-out">
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
						Sign Up for <span className="text-primary-500">Early access</span>{" "}
						and Stay updated with folio
						<span className="text-primary-500">X</span>
					</span>
					<MailchimpSubscribe
						url={mailchimpUrl}
						render={({ subscribe, status, message }) => (
							<SignUpForm
								status={status}
								message={message}
								onValidated={(formData) => subscribe(formData)}
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
