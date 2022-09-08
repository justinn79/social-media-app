import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';


import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts); // useSelector has access to the whole redux store... (state) is what holds these values. "posts" is from index.js in reducers.
    const classes = useStyles();

    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.reverse().map((post) => (
                    <Grid key={post._id} item xs={12}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;