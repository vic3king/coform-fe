import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { FaRegFileAlt } from "react-icons/fa"
import { SlOptions } from "react-icons/sl"
import { getFileExt } from "../../utilities"
import { RxText } from "react-icons/rx"

interface IFile {
  fileName: string
  loading?: boolean
}

const File = ({ fileName, loading }: IFile) => {
  return (
    <div className="p-6 bg-gray-100 flex justify-between items-center rounded">
      <div className="flex gap-2 items-center">
        <div className="p-1 border rounded border-gray-200">
          {getFileExt(fileName) === 'pdf' ? <FaRegFileAlt /> : <RxText />}
        </div>
        <p className="text-sm text-gray-900">{fileName}</p>
      </div>
      <div>
        {loading ? (
          <div className="flex justify-center items-center animate-spin text-purple-700">
            <AiOutlineLoading3Quarters />
          </div>
        ) : (
          <SlOptions />
        )}
      </div>
    </div>
  )
}

export default File