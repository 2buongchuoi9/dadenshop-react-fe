import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from 'axios';
import service from '~/services';

function AddMedia() {
  const handelOnChange = (info) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const customRequestHandler = (options) => {
    console.log(options);

    const { file, headers, data, onSuccess, onError, onProgress } = options;

    const a = async () => await service.file.addFile(file, onSuccess, onError);
    a();
  };

  return (
    <div>
      <Upload.Dragger
        action={'http://localhost:8082/api/files/upload'}
        customRequest={customRequestHandler}
        listType="picture"
        name="file"
        onChange={handelOnChange}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
        </p>
      </Upload.Dragger>
    </div>
  );
}
export default AddMedia;
