import React, { useState, useEffect } from 'react'
import { getLocalStorageObject, setLocalStorageObject } from '../../data/LocalStorage'

function getSavedValue(key, initialValue) {
  const savedValue = getLocalStorageObject({ key: key })
  
  if (savedValue) return savedValue

  if (initialValue instanceof Function) return initialValue()

  return initialValue
  
}

// CUSTOM HOOK BELOW

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })


  useEffect(() => {
   setLocalStorageObject({key:key,value:value})  
  }, [value])


  return [value, setValue]
}