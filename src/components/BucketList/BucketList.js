import Bucket from "./Bucket";


const BucketList = (props) => {
    const bucketList = props.bucketList;
    console.log(bucketList);
    return (
        <div className="BucketList">
            <div>1</div>
            {/* {bucketList.map(bucket => {
                return <Bucket object={bucket}/>
            })} */}
            {bucketList.map(bucket => {
                return <Bucket test={bucket}/>
            })}
        </div>
    );
}

export default BucketList;