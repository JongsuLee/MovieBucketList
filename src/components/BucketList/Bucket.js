import {useState} from 'react';

const Bucket = (props) => {
    const bucket = props.object;
    console.log(bucket)
    const [checkedWatched, setCheckedWatched] = useState(false);

    const checkedWatchedHandler = () => setCheckedWatched(!checkedWatched);

    return (
        <div>test</div>
        // <div className="Bucket">
        //     <input type="checkbox" onChange={checkedWatchedHandler}></input>
        //     <label className={`Watched-${checkedWatched}`}>{bucket.title}</label>
        // </div>
    );
} 



export default Bucket;