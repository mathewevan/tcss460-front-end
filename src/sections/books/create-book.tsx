'use client';

import { Formik } from 'formik';
import Button from '@mui/material/Button';
import AnimateButton from '../../components/@extended/AnimateButton';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import * as Yup from 'yup';

export default function CreateBook() {
  return (
    //All Ratings parts might not be needed based on the API but has the info built in just in case.
    <Formik
      initialValues={{
        newBook: '',
        newISBN: '',
        newAuthor: '',
        newPublication: '',
        newOriginalTitle: '',
        newTitle: '',
        newRatings: '',
        newAvgRating: '',
        newRatingCount: '',
        new1Star: '',
        new2Star: '',
        new3Star: '',
        new4Star: '',
        new5Star: '',
        newFullImageLink: '',
        newSmallImageLink: ''
      }}
      onSubmit={async (values, helpers) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        newISBN: Yup.number().max(13).required('A valid ISBN is required!').min(10).required('A valid ISBN is required!'),
        newAuthor: Yup.string()
          .required('A book needs at least 1 author!')
          .matches(/^(\s*\S+?(\s*,\s*\S+?)*)?$/, 'The authors must be listed in a comma-separated list.'),
        newPublication: Yup.number().required('A valid Publication Year is required!'),
        newOriginalTitle: Yup.string().required('A book needs an original title!'),
        newTitle: Yup.string().required('A book needs a title!'),
        newFullImageLink: Yup.string().url().required('A book needs an image link'),
        newSmallImageLink: Yup.string().url().required('A book needs a small image as a link')
      })}
      //Possible good Validation Schema test to have: Making sure the added book doesn't match an existing book in the database
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor="newISBN">Book ISBN Number</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newISBN && errors.newISBN)} //ISBN Number
                id="newISBN"
                type="number" //For numeric data
                value={values.newISBN}
                name="newISBN"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the book's ISBN number"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newAuthor">Authors</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newAuthor && errors.newAuthor)} //Author(s)
                id="newAuthor"
                type="text" //For string data
                value={values.newAuthor}
                name="newAuthor"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter all of the authors of the book"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newPublication">Original Publication Year</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newPublication && errors.newPublication)} //Publication Year
                id="newPublication"
                type="number"
                value={values.newPublication}
                name="newPublication"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the original publication year of the book."
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newOriginalTitle">Original Book Title</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newOriginalTitle && errors.newOriginalTitle)} //Original Title
                id="newOriginalTitle"
                type="text"
                value={values.newOriginalTitle}
                name="newOriginalTitle"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the original title of the book"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newTitle">Book Title</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newTitle && errors.newTitle)} //Title
                id="newTitle"
                type="text"
                value={values.newTitle}
                name="newTitle"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the title of the book"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newRatings">the Book</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newRatings && errors.newRatings)} //Ratings
                id="newRatings"
                type="text" //A placeholder for the object data type.
                value={values.newRatings}
                name="newRatings"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the book's rating"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newAvgRating">Average Book Rating</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newAvgRating && errors.newAvgRating)} //Average Rating
                id="newAvgRating"
                type="number"
                value={values.newAvgRating}
                name="newAvgRating"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the average rating of your book"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newRatingCount">Book Rating Count</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newRatingCount && errors.newRatingCount)} //Rating Count
                id="newRatingCount"
                type="number"
                value={values.newRatingCount}
                name="newRatingCount"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the rating count"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="new1Star">1 Star Book Rating Total</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.new1Star && errors.new1Star)} //1 Star Rating
                id="new1Star"
                type="number"
                value={values.new1Star}
                name="new1Star"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the amount of 1 star ratings."
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="new2Star">2 Star Book Rating Total</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.new2Star && errors.new2Star)} //2 Star Rating
                id="new2Star"
                type="number"
                value={values.new2Star}
                name="new2Star"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the amount of 2 star ratings."
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="new3Star">3 Star Book Rating Total</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.new3Star && errors.new3Star)} //3 Star Rating
                id="new3Star"
                type="number"
                value={values.new3Star}
                name="new3Star"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the amount of 3 star ratings."
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="new4Star">4 Star Book Rating Total</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.new4Star && errors.new4Star)} //4 Star Rating
                id="new4Star"
                type="number"
                value={values.new4Star}
                name="new4Star"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the amount of 4 star ratings."
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="new1Star">5 Star Book Rating Total</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.new5Star && errors.new5Star)} //5 Star Rating
                id="new5Star"
                type="number"
                value={values.new5Star}
                name="new5Star"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the amount of 5 star ratings."
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newFullImageLink"></InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newFullImageLink && errors.newFullImageLink)} //Full Image
                id="newFullImageLink"
                type="url" //For adding a URL link
                value={values.newFullImageLink}
                name="newFullImageLink"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the full-sized image URL link for your book."
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newSmallImageLink"></InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newSmallImageLink && errors.newSmallImageLink)} //Small Image
                id="newSmallImageLink"
                type="url" //For adding a URL link
                value={values.newFullImageLink}
                name="newSmallImageLink"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter the small-sized image URL link for your book."
              />
            </Grid>
            <Grid item xs={12}>
              <Stack alignItems="flex-start" spacing={1}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Change Password
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
