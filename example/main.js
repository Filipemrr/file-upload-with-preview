import './main.scss';
import FileUploadWithPreview from '../src/index';
import '../src/index.scss';

const importedBaseImage = require('./custom-image.svg');

// First upload
const firstUpload = new FileUploadWithPreview('myFirstImage');
const firstUploadInfoButton = document.querySelector('.upload-info-button--first');
firstUploadInfoButton.addEventListener('click', () => {
  console.log('First upload:', firstUpload, firstUpload.cachedFileArray);
});

// Second upload
const secondUpload = new FileUploadWithPreview('mySecondImage', {
  showDeleteButtonOnImages: true,
  text: {
    chooseFile: 'Custom Placeholder Copy',
    browse: 'Custom Button Copy',
    selectedCount: 'Custom Files Selected Copy',
  },
  maxFileCount: 5,
  images: {
    baseImage: importedBaseImage,
  },
  presetFiles: [
    'https://images.unsplash.com/photo-1557090495-fc9312e77b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  ],
});
const secondUploadInfoButton = document.querySelector('.upload-info-button--second');
secondUploadInfoButton.addEventListener('click', () => {
  console.log('Second upload:', secondUpload, secondUpload.cachedFileArray);
});

window.addEventListener('fileUploadWithPreview:imagesAdded', (e) => {
  // e.detail.uploadId
  // e.detail.cachedFileArray
  // e.detail.selectedFilesCount
  // Use `e.detail.uploadId` to match up to your specific input
  if (e.detail.uploadId === 'myFirstImage') {
    console.log(e.detail.addedFilesCount);
    console.log(e.detail.cachedFileArray);
  }

  if (e.detail.uploadId === 'mySecondImage') {
    console.log(e.detail.addedFilesCount);
    console.log(e.detail.cachedFileArray);
  }
});

// Image deleted event listener
window.addEventListener('fileUploadWithPreview:imageDeleted', (e) => {
  if (e.detail.uploadId === 'mySecondImage') {
    console.log(e.detail.currentFileCount);
    console.log(e.detail.cachedFileArray);
  }
});

// Clear button event listener
window.addEventListener('fileUploadWithPreview:clearButtonClicked', (e) => {
  if (e.detail.uploadId === 'mySecondImage') {
    console.log('clearButtonClicked');
    console.log(e.detail.uploadId);
  }
});
