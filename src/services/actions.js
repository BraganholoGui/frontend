/* eslint-disable no-async-promise-executor */
import { ReactElement } from 'react';
import history from '../history';
import api from './api';

function clear() {
  localStorage.removeItem('token');
  history.push('/login');
}

function handleResponse(resp) {
  if(resp){
    if (resp.status === 403) {
      clear();
    } else {
      return resp.data;
    }
  }

}

export async function get(url) {

  return await api.get(url, {
    headers: {
      authorization: 'Bearer '+ await localStorage.getItem('token')
    }
  })
    .then((response) => {
      console.log('')
      return handleResponse(response);
    })
    .catch((error) => {
      console.log(error);
      clear();
    });
}


export function put(url, data, method = "PUT") {

  // Swal.mixin({
  //   toast: true,
  //   position: 'top-end'
  // }).fire({ onOpen: () => { Swal.showLoading() } });

  return new Promise(async (resolve, reject) => {
    try {
      api.put(`${url}`, JSON.stringify(data), {
        headers: {
          authorization: 'Bearer ' + await localStorage.getItem("token")
        }
      })
        .then(response => {
          resolve(handleResponse(response))
        })
        .catch(error => {
          reject(error)
          // clear()
        })
    } catch (error) {
      reject(error)
    }
  })
}

export function post(url, data) {
  return new Promise(async (resolve, reject) => {
    try {
      api.post(url, data, {
        headers: {
          authorization: 'Bearer ' + await localStorage.getItem("token")
        }
      })
        .then(response => {
          resolve(handleResponse(response))
        })
        .catch(error => {
          reject(error)
          handleResponse()
        })
    } catch (error) {
      reject(error)
    }
  })
  }

  export function del(url, id) {

    // Swal.mixin({
    //   toast: true,
    //   position: 'top-end'
    // }).fire({ onOpen: () => { Swal.showLoading() } });
  
    return new Promise(async (resolve, reject) => {
     
      try {
        api.delete(`${url}/${id}`, {
          headers: {
            authorization: 'Bearer ' + await localStorage.getItem("token")
          }
        })
          .then(response => {
            resolve(handleResponse(response))
          })
          .catch(error => {
            reject(error)
            // clear()
          })
      } catch (error) {
        reject(error)
      }
    })
  }
  
  export const defaults = {
    headers: {
      Authorization: '',
    },
  };
  
