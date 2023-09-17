import { CustomError } from "@/protocols/error-protocol";

function NotFoundError(resource: string): CustomError {
  return {
    type: "NotFoundError",
    message: `${resource ? resource : "Item"} not found!`,
  };
}

function ConflictError(resource: string): CustomError {
  return {
    type: "ConflictError",
    message: `${resource ? resource : "Item"} already exists!`,
  };
}

function UnprocessableEntityError(resource: string): CustomError {
  return {
    type: "UnprocessableEntityError",
    message: `"${resource}" is not valid!`,
  };
}

function InternalServerError(): CustomError {
  return {
    type: "InternalServerError",
    message: `An unexpected server error occurred!`,
  };
}

function BadRequestError(): CustomError {
  return {
    type: "BadRequestError",
    message: `Bad Request!`,
  };
}

export const errors = { NotFoundError, ConflictError, InternalServerError, UnprocessableEntityError, BadRequestError };
