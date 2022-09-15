import {useState} from 'react';
import './Bucket.css'

const Bucket = (props) => {
    const bucket = JSON.parse(props.object);
    const [checkedWatched, setCheckedWatched] = useState(false);

    const checkedWatchedHandler = () => setCheckedWatched(!checkedWatched);

    return (
        // <div>test</div>
        <div className={`Bucket Bucket-${checkedWatched}`}>
            <input type="checkbox" onChange={checkedWatchedHandler}></input>
            <label className={`Watched-${checkedWatched}`}>{bucket?.title || bucket?.name}</label>
        </div>
    );
};

export default Bucket;