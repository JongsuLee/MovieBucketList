import Bucket from "./Bucket";
import './BucketList.css'


const BucketList = (props) => {
    const bucketList = props.bucketList;
    return (
        <div className="BucketList">
            <h2>BucketList</h2>
            {bucketList.map(bucket => {
                console.log(bucket)
                return <Bucket key={bucket.id} object={bucket}/>
            })}
        </div>
    );
}

export default BucketList;