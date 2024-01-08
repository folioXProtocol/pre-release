import {
	FaTwitter,
	FaInstagram,
	FaRedditAlien,
	FaDiscord,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-primary-600 w-[100vw] flex flex-col justify-center items-center p-5 mt-10">
			<div className="italic text-light-100 hover:text-primary-100 active:text-primary-200">
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
			<span className="text-xs mt-5 text-light-200">© folioX 2024</span>
		</div>
	);
};

const SocialBtn = ({ to, children }) => (
	<a
		href={to}
		target="_blank"
		rel="noreferrer noopener"
		className="bg-light-100 rounded p-2 text-dark-500 hover:brightness-110 transition-all ease-in-out active:bg-light-300 cursor-pointer">
		{children}
	</a>
);

export default Footer;
