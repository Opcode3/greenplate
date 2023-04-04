import TimesIcon from '@/components/icons/timesIcon'
import { REDUCER_ACTION } from '@/hooks/actions'
import { UseStore } from '@/hooks/context'
import { MODAL_COMPONENT } from '@/hooks/states'
import React, { useContext } from 'react'

type ModalLayoutProps = {
    children: JSX.Element
}
const ModalLayout = ({children} : ModalLayoutProps) => {
  const {state, dispatch} = UseStore();
  return (
    <div className='w-full h-screen fixed bg-r-black top-0 z-10 bg-opacity-50 overflow-auto'>

        <div className="flex flex-col items-center pt-[15vh]">
            {children}
            <div className=" my-3 p-3 cursor-pointer" onClick={ e => dispatch({type: REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE, payload: MODAL_COMPONENT.EMPTY})}> 
              <TimesIcon className='hover:w-16 w-12 transition-all' /> 
            </div>
        </div>
    </div>
  )
}

export default ModalLayout