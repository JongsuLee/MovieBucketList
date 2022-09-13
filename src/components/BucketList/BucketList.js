import Bucket from "./Bucket";

/**
 * BucketList
 * 
 * Bucket1
 * Bucket2
 * 
 */

const BucketList = (props) => {

    const bucketList = props.bucketList;
    bucketList.map(bucket => {
        return <Bucket bucket={bucket}/>
    })
    console.log();
}
