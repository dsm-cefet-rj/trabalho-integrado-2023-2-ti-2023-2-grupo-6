// blogSlice.js
import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import blogService from "./blogSevice";

const blogAdapter = createEntityAdapter();

const initialState = blogAdapter.getInitialState({
  message: "",
  isError: null,
});

export const getBlogPosts = createAsyncThunk("blog/getBlogPosts", async () => {
  const response = await blogService.getBlogPosts();
  return response.data;
});

export const createBlogPost = createAsyncThunk(
  "blog/createBlogPost",
  async (blogPost) => {
    const response = await blogService.createBlogPost(blogPost);
    return response.data;
  }
);

export const updateBlogPost = createAsyncThunk(
  "blog/updateBlogPost",
  async (blogPost) => {
    const response = await blogService.updateBlogPost(blogPost);
    return response.data;
  }
);

export const deleteBlogPost = createAsyncThunk(
  "blog/deleteBlogPost",
  async (id) => {
    const response = await blogService.deleteBlogPost(id);
    return response.data;
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPosts.pending, (state) => {
        state.message = "loading";
      })
      .addCase(getBlogPosts.fulfilled, (state, action) => {
        state.message = "loaded";
        blogAdapter.setAll(state, action.payload);
      })
      .addCase(getBlogPosts.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })
      .addCase(createBlogPost.pending, (state) => {
        state.message = "loading";
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.message = "saved";
        blogAdapter.addOne(state, action.payload);
      })
      .addCase(createBlogPost.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })
      .addCase(updateBlogPost.pending, (state) => {
        state.message = "loading";
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        state.message = "saved";
        blogAdapter.upsertOne(state, action.payload);
      })
      .addCase(updateBlogPost.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      })
      .addCase(deleteBlogPost.pending, (state) => {
        state.message = "loading";
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.message = "deleted";
        blogAdapter.removeOne(state, action.payload);
      })
      .addCase(deleteBlogPost.rejected, (state, action) => {
        state.message = "error";
        state.isError = action.error.message;
      });
  },
});

export const { selectAll: selectAllBlogPosts, selectById: selectBlogPostById } =
  blogAdapter.getSelectors((state) => state?.blog);

export default blogSlice.reducer;
