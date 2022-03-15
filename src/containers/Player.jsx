import React,{useLayoutEffect} from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'

const Player = props => {
  let navigate = useNavigate();
  const {id} = useParams();
  const hasPlaying = Object.keys(props.playing).length>0;
  console.log(hasPlaying)
  useLayoutEffect(() => {
    props.getVideoSource(id)
    console.log('envia id'+id)
  }, [])
  
  return hasPlaying ? (
    <div className='Player'>
        <video controls autoPlay>
            <source src={props.playing.source} type="video/mp4" />
        </video>
        <div className="Player-back">
            <button type='button' onClick={()=>{navigate(-1)}}>
                Regresar
            </button>
        </div>
    </div>
  ):
  (<Navigate to={"/404/"} />) ;
}

const mapStateToProps = state => {
  return {
    playing:state.playing,
  }
}

const mapDispatchToProps ={
  getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);