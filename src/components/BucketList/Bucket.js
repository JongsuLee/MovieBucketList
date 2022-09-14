const Bucket = (props) => {
    const [checkedWatched, setCheckedWatched] = useState(false);

    const checkedWatchedHandler = () => setCheckedWatched(!checkedWatched);

    return (
        <div className="Bucket">
            <input type="checkbox" onChange={checkedWatchedHandler}></input>
            <label className={`Watched-${checkedWatched}`}>{props.bucket.title}</label>
        </div>
    );
} 



export default Bucket;