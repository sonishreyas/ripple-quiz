const handleRuleModal = () => {
	const rulesModal = document.querySelector(".rules-modal");
	const rulesModalAcceptBtn = document.querySelector(".rules-modal-btn");
	rulesModalAcceptBtn.addEventListener("click", () => {
		rulesModal.style.display = "none";
	});
};

export { handleRuleModal };
