const SuccessModal = () => {
    return (
        <>
            <dialog id="success_modal" className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Success!</h3>
                    <p className="py-4">
                        The journal entry has been successfully added to your
                        journal. Take a moment to reflect on your thoughts and
                        feelings, and continue your journaling journey with
                        confidence.
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default SuccessModal
