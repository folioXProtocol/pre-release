import CoverArt from "./assets/cover-art.png";
import LogoLight from "./assets/logo-light.png";

import SignUpForm from "./components/SignUpForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import {
	FaTwitter,
	FaInstagram,
	FaRedditAlien,
	FaDiscord,
} from "react-icons/fa";

function App() {
	const mailchimpUrl = `https://foliox.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

	return (
		<div className="relative p-5 w-full md:w-9/12 m-auto max-w-[100ch] text-dark-500 transition-all duration-200 ease-in-out">
			<img
				className="w-24 m-auto"
				src={LogoLight}
				alt="logo"
			/>
			<div className="flex flex-col md:flex-row justify-center items-center md:gap-10 md:mt-[5rem] mt-5">
				<img className="w-10/12 md:w-5/12" src={CoverArt} alt="cover" />
				<div className="p-7 md:mt-[4rem] text-center md:text-left">
					<h1 className="text-[2rem] font-extrabold leading-9 md:leading-12 mb-4">
						Intent Based{" "}
						<span className="text-primary-500">
							Cross Chain
						</span>
						<br />
						Portfolio Management
					</h1>
					<p className="leading-tight">
						folioX, Your One-Stop Portfolio Powerhouse.
						<br />
						Build Wealth effortlessly with our
						<br />
						<span className="font-semibold"> Autonomous Intent Framework</span>—
					</p>
					<p className="italic leading-tight mt-2">
						No bridge or protocol worries, we curate the best for you!
					</p>
				</div>
			</div>
			<div className="m-auto w-fit mt-10 md:mt-[6rem] text-center">
				<span className="text-xl font-semibold">
					Sign Up for{" "}
					<span className="text-primary-500">
						Early access
					</span>{" "}
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
			<div className="m-auto w-fit mt-10 md:mt-[6.75rem] flex flex-col justify-center items-center">
				<div className="italic text-primary-500 hover:text-primary-400 active:text-primary-600">
					<a href="mailto:contact@foliox.io">contact@foliox.io</a>
				</div>
				<div className="flex justify-center gap-2 mt-2">
					<SocialBtn to="https://x.com/foliox_protocol" className="twitter">
						<FaTwitter />
					</SocialBtn>
					<SocialBtn
						to="https://www.instagram.com/foliox_protocol"
						className="instagram">
						<FaInstagram />
					</SocialBtn>
					<SocialBtn
						to="https://www.reddit.com/user/FolioX_Protocol/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
						className="reddit">
						<FaRedditAlien />
					</SocialBtn>
					<SocialBtn to="https://discord.gg/4WGsKVhJ" className="discord">
						<FaDiscord />
					</SocialBtn>
				</div>
				<span className="text-xs mt-5">© folioX 2024</span>
			</div>
		</div>
	);
}

const SocialBtn = ({ to, children }) => (
	<a
		href={to}
		target="_blank"
		rel="noreferrer noopener"
		className="bg-dark-400 rounded p-2 text-light-100 hover:bg-dark-300 transition-all ease-in-out active:bg-dark-500 cursor-pointer">
		{children}
	</a>
);

export default App;
