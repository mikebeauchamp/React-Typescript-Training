const AddJournalForm = () => {
    return (
        <>
            <form className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <label htmlFor="title">Journal Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Give your journal entry a title"
                        className="input input-bordered flex-1 rounded-lg border p-2"
                    ></input>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emotions" className="form-control w-full">
                        How are you feeling today?
                    </label>
                    <select
                        id="emotions"
                        defaultValue="Pick a color"
                        className="select select-bordered w-full rounded-lg border p-2"
                    >
                        <option selected>Happy</option>
                        <option>Neutral</option>
                        <option>Sad</option>
                    </select>
                </div>

                <textarea
                    className="textarea textarea-bordered w-full rounded-lg border p-2"
                    placeholder="Write your journal entry here..."
                    rows={10}
                ></textarea>

                <button className="btn btn-primary w-full">Save Entry</button>
            </form>
        </>
    )
}

export default AddJournalForm
