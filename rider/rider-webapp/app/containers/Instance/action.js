/*
 * <<
 * wormhole
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import {
  LOAD_INSTANCES,
  LOAD_INSTANCES_SUCCESS,
  ADD_INSTANCE,
  ADD_INSTANCE_SUCCESS,
  LOAD_INSTANCES_INPUT_VALUE,
  LOAD_INSTANCES_INPUT_VALUE_SUCCESS,
  LOAD_INSTANCES_INPUT_VALUE_ERROR,
  LOAD_INSTANCES_EXIT,
  LOAD_INSTANCES_EXIT_SUCCESS,
  LOAD_INSTANCES_EXIT_ERROR,
  LOAD_SINGLE_INSTANCE,
  LOAD_SINGLE_INSTANCE_SUCCESS,
  EDIT_INSTANCE,
  EDIT_INSTANCE_SUCCESS,
  DELETE_INSTANCE,
  DELETE_INSTANCE_SUCCESS,
  DELETE_INSTANCE_ERROR,
  GET_ERROR
} from './constants'

export function loadInstances (resolve) {
  return {
    type: LOAD_INSTANCES,
    payload: {
      resolve
    }
  }
}

export function instancesLoaded (instances) {
  return {
    type: LOAD_INSTANCES_SUCCESS,
    payload: {
      instances
    }
  }
}

export function addInstance (instance, resolve) {
  return {
    type: ADD_INSTANCE,
    payload: {
      instance,
      resolve
    }
  }
}

export function instanceAdded (result) {
  return {
    type: ADD_INSTANCE_SUCCESS,
    payload: {
      result
    }
  }
}

export function loadSingleInstance (instanceId, resolve) {
  return {
    type: LOAD_SINGLE_INSTANCE,
    payload: {
      instanceId,
      resolve
    }
  }
}

export function singleInstanceLoaded (result) {
  return {
    type: LOAD_SINGLE_INSTANCE_SUCCESS,
    payload: {
      result
    }
  }
}

export function editInstance (value, resolve) {
  return {
    type: EDIT_INSTANCE,
    payload: {
      value,
      resolve
    }
  }
}

export function instanceEdited (result) {
  return {
    type: EDIT_INSTANCE_SUCCESS,
    payload: {
      result
    }
  }
}

export function loadInstanceInputValue (value, resolve, reject) {
  return {
    type: LOAD_INSTANCES_INPUT_VALUE,
    payload: {
      value,
      resolve,
      reject
    }
  }
}

export function instanceInputValueLoaded (result) {
  return {
    type: LOAD_INSTANCES_INPUT_VALUE_SUCCESS,
    payload: {
      result
    }
  }
}

export function instanceInputValueErrorLoaded (result) {
  return {
    type: LOAD_INSTANCES_INPUT_VALUE_ERROR,
    payload: {
      result
    }
  }
}

export function loadInstanceExit (value, resolve, reject) {
  return {
    type: LOAD_INSTANCES_EXIT,
    payload: {
      value,
      resolve,
      reject
    }
  }
}

export function instanceExitLoaded (result) {
  return {
    type: LOAD_INSTANCES_EXIT_SUCCESS,
    payload: {
      result
    }
  }
}

export function instanceExitErrorLoaded (result) {
  return {
    type: LOAD_INSTANCES_EXIT_ERROR,
    payload: {
      result
    }
  }
}

export function deleteInstace (instanceId, resolve, reject) {
  return {
    type: DELETE_INSTANCE,
    payload: {
      instanceId,
      resolve,
      reject
    }
  }
}

export function instanceDeleted (result) {
  return {
    type: DELETE_INSTANCE_SUCCESS,
    payload: {
      result
    }
  }
}

export function instanceDeletedError (result) {
  return {
    type: DELETE_INSTANCE_ERROR,
    payload: {
      result
    }
  }
}

export function getError (error) {
  return {
    type: GET_ERROR,
    payload: {
      error
    }
  }
}
