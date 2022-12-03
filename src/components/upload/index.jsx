import React from 'react'
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message} from 'antd';

const Upload = () => {
    const navigate = useNavigate(6);
    return (
        <>
            {/*Upload*/}
            <div>
                <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
            </div>

            {/*Submit*/}
            <div>
            <button className='bg-blue-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-blue-500'>
                Submit
            </button>
            </div>
        </>
    )
}

export default Upload