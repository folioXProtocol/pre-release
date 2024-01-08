import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const SignUpForm = ({ status, message, onValidated, isDark }) => {
	const [email, setEmail] = useState("");

	const handleEmailSubmit = async (e) => {
		e.preventDefault();
		setEmail("");
		email &&
			onValidated({
				EMAIL: email,
			});
	};

	if (status === "success") {
		return (
			<>
				<p className="text-success-600 dark:text-success-400 font-semibold mt-5">
					Congratulations! 🎉
					<br />
					You've just unlocked a VIP pass to exclusive updates.
				</p>
				<ConfettiExplosion
					duration={3000}
					force={1}
					width={1600}
					particleCount={250}
				/>
			</>
		);
	}

	return (
		<form
			method="POST"
			className="flex flex-col md:flex-row justify-center gap-2 w-5/6 m-auto mt-5"
			onSubmit={(e) => handleEmailSubmit(e)}>
			<div className="relative w-full md:w-9/12">
				<input
					className={`bg-white/50 dark:bg-dark-400 dark:text-light-100 rounded border border-ridge py-2 px-4 focus:outline-none w-full text-center md:text-left ${
						status === "error" ? "border-danger-500 dark:border-danger-400" : "border-dark-100"
					}`}
					type="text"
					placeholder="johndoe@acme.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{status === "error" && (
					<p className="absolute top-[3rem] text-xs font-semibold text-danger-500 dark:text-danger-400 text-left">
						{message}
					</p>
				)}
			</div>
			<input
				type="submit"
				disabled={!email}
				value={status === "sending" ? <Loader /> : "Sign Up"}
				className="bg-primary-500 dark:bg-primary-400 text-light-100 text-sm font-bold rounded py-2 md:px-4 focus:outline-none hover:brightness-110 active:brightness-90 w-full md:w-3/12 disabled:cursor-not-allowed disabled:opacity-70"
			/>
		</form>
	);
};

const Loader = () => (
	<div
		className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
		role="status">
		<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
			Loading...
		</span>
	</div>
);

export default SignUpForm;
