import { createSlice } from '@reduxjs/toolkit';

const reducerSlice = createSlice({
  name: 'reducer',
  initialState: {
    modalInfo: {
      openModal: false,
      modalPurpose: null,
      postId: null,
    },
    categoryList: [],
  },
  reducers: {
    setOpenModal: (state, action) => {
      state.modalInfo.openModal = true;
      state.modalInfo.modalPurpose = action.payload.purpose;
      if (action.payload.purpose === 'Edit') {
        state.modalInfo.postId = action.payload.postId;
      }
    },
    setCloseModal: (state) => {
      state.modalInfo.openModal = false;
      state.modalInfo.modalPurpose = null;
      state.modalInfo.postId = null;
    },
    setCategory: (state, action) => {
      state.categoryList = action.payload;
    },
  },
});

export const { setOpenModal, setCloseModal, setCategory } =
  reducerSlice.actions;

export default reducerSlice.reducer;
