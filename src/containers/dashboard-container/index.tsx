import { useEffect } from 'react'
import './dashboard.scss'
import DataTable from './data-table'
import FormModal from '../../components/form-modal'
import { useAppDispatch} from '../../modal/hooks'
import { fetchStudentData } from '../../services/dashboard/dashboard.service'

const Dashboard = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchStudentData())
    }, [])

    return (
        <>
            <div className='container form-button-container'>
                <FormModal />
            </div>
            <div className='container-fluid w-100  mx-auto p-2 top-container'>
                <div className='container-fluid table-container' >
                    <DataTable />
                </div>
            </div>
        </>
    )
}

export default Dashboard