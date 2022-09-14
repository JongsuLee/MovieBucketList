import Bucket from "./Bucket";


const BucketList = (props) => {
    const bucketList = props.bucketList;
    return (
        <div className="BucketList">
            {bucketList.map(bucket => {
                console.log(bucket)
                return <Bucket key={bucket.id} object={bucket}/>
            })}
        </div>
    );
}

export default BucketList;