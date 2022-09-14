import Bucket from "./Bucket";


const BucketList = (props) => {
    const bucketList = props.bucketList;
    return (
        <div className="BucketList">
            {bucketList.map((bucket, index) => {
                return <Bucket key={index} object={bucket}/>
            })}
        </div>
    );
}

export default BucketList;