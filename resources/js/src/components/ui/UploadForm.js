import { useEffect, useState } from 'react';
import {
  FaUpload
} from '../Icon/IconImage'
const UploadForm = ({returnVal}) => {
  
    const init = () => {
        console.log("Upload Initialised");

        var fileSelect    = document.getElementById('file-upload'),
        // submitButton  = document.getElementById('submit-button'),
            fileDrag      = document.getElementById('file-drag');

        fileSelect.addEventListener('change', fileSelectHandler, false);

        // Is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
        // File Drop
            fileDrag.addEventListener('dragover', fileDragHover, false);
            fileDrag.addEventListener('dragleave', fileDragHover, false);
            fileDrag.addEventListener('drop', fileSelectHandler, false);
        }
    }

    const fileDragHover = (e) => {
        var fileDrag = document.getElementById('file-drag');
    
        e.stopPropagation();
        e.preventDefault();
    
        fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
    }

    const fileSelectHandler = (e) => {
        // Fetch FileList object
        var files = e.target.files || e.dataTransfer.files;
    
        // Cancel event and hover styling
        fileDragHover(e);
    
        // Process all File objects
        for (var i = 0, f; f = files[i]; i++) {
          parseFile(f);
          uploadFile(f);
        }
    }
    
    // Output
    // const output = (msg) => {
    //     // Response
    //     var m = document.getElementById('messages');
    //     m.innerHTML = msg;
    // }

    const parseFile = (file) => {

        console.log(file.name);
        // output(
        //   '<strong>' + encodeURI(file.name) + '</strong>'
        // );
        
        // var fileType = file.type;
        // console.log(fileType);
        var imageName = file.name;
    
        var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
        if (isGood) {
          document.getElementById('start').classList.add("hidden");
          document.getElementById('response').classList.remove("hidden");
          document.getElementById('notimage').classList.add("hidden");
          // Thumbnail Preview
          document.getElementById('file-image').classList.remove("hidden");
          document.getElementById('file-image').src = URL.createObjectURL(file);
        }
        else {
          document.getElementById('file-image').classList.add("hidden");
          document.getElementById('notimage').classList.remove("hidden");
          document.getElementById('start').classList.remove("hidden");
          document.getElementById('response').classList.add("hidden");
          document.getElementById("file-upload-form").reset();
        }
    }

    // const setProgressMaxValue = (e) => {
    //     var pBar = document.getElementById('file-progress');
    
    //     if (e.lengthComputable) {
    //       pBar.max = e.total;
    //     }
    // }
    
    // const updateFileProgress = (e) => {
    //     var pBar = document.getElementById('file-progress');
    
    //     if (e.lengthComputable) {
    //       pBar.value = e.loaded;
    //     }
    // }
    
    const uploadFile = (file) => {
    
        var xhr = new XMLHttpRequest(),
          fileInput = document.getElementById('class-roster-file'),
          // pBar = document.getElementById('file-progress'),
          fileSizeLimit = 1024; // In MB
        if (xhr.upload) {
          // Check if file is less than x MB
          if (file.size <= fileSizeLimit * 1024 * 1024) {
            // Progress bar
            // pBar.style.display = 'inline';
            // xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
            // xhr.upload.addEventListener('progress', updateFileProgress, false);
    
            // File received / failed
            xhr.onreadystatechange = function(e) {
              if (xhr.readyState == 4) {
                // Everything is good!
    
                // progress.className = (xhr.status == 200 ? "success" : "failure");
                // document.location.reload(true);
                returnVal("")
              }
            };
    
            // Start upload
            xhr.open('POST', document.getElementById('file-upload-form').action, true);
            xhr.setRequestHeader('X-File-Name', file.name);
            xhr.setRequestHeader('X-File-Size', file.size);
            xhr.setRequestHeader('Content-Type', 'multipart/form-data');
            xhr.send(file);
          } else {
            // output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
          }
        }
    }


    useEffect(() => {
      init()
    }, [])


    return (
        <>
            <form id="file-upload-form" 
                className="uploader flex flex-col p-3 bg-transparent border rounded focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                <input id="file-upload" className="hidden" type="file" name="fileUpload" accept="image/*" />

                <label htmlFor="file-upload" id="file-drag">
                    <img id="file-image" src="#" alt="Preview" className="hidden" />
                    <div id="start" className="flex flex-col justify-center">
                        <FaUpload className='text-4xl mx-auto mb-4 cursor-pointer' />
                        <div className="text-center">Select a file or drag here</div>
                        <div id="notimage" className="hidden">Please select an image</div>
                        {/* <div className="mt-2 flex justify-center flex-col w-25 mx-auto">
                          <button id="file-upload-btn" className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">Upload</button>
                        </div> */}
                    </div>
                    <div id="response" className="hidden">
                        {/* <div id="messages"></div> */}
                        {/* <progress className="progress" id="file-progress" value="0">
                            <span>0</span>%
                        </progress> */}
                    </div>
                </label>
            </form>
        </>
    )
}


export default UploadForm