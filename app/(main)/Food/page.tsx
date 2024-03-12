const Food = () => {
    const date = new Date();
    console.log(date.getDate());
    return (
        <div className="max-w-[992px] mr-auto ml-auto">
            <div className="m-4">Your food Diary for : {date.toString()} </div>
        </div>
    )
}

export default Food
