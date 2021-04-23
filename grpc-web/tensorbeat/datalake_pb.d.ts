import * as jspb from 'google-protobuf'

import * as tensorbeat_common_pb from '../tensorbeat/common_pb';


export class GetSongsByTagsRequest extends jspb.Message {
  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): GetSongsByTagsRequest;

  getFilter(): Filter;
  setFilter(value: Filter): GetSongsByTagsRequest;

  getPageToken(): number;
  setPageToken(value: number): GetSongsByTagsRequest;

  getPageSize(): number;
  setPageSize(value: number): GetSongsByTagsRequest;

  getPageTokenCase(): GetSongsByTagsRequest.PageTokenCase;

  getPageSizeCase(): GetSongsByTagsRequest.PageSizeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsByTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsByTagsRequest): GetSongsByTagsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSongsByTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsByTagsRequest;
  static deserializeBinaryFromReader(message: GetSongsByTagsRequest, reader: jspb.BinaryReader): GetSongsByTagsRequest;
}

export namespace GetSongsByTagsRequest {
  export type AsObject = {
    tagsMap: Array<[string, string]>,
    filter: Filter,
    pageToken: number,
    pageSize: number,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 3,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 4,
  }
}

export class GetSongsByTagsResponse extends jspb.Message {
  getSongsList(): Array<tensorbeat_common_pb.File>;
  setSongsList(value: Array<tensorbeat_common_pb.File>): GetSongsByTagsResponse;
  clearSongsList(): GetSongsByTagsResponse;
  addSongs(value?: tensorbeat_common_pb.File, index?: number): tensorbeat_common_pb.File;

  getNextPageToken(): number;
  setNextPageToken(value: number): GetSongsByTagsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsByTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsByTagsResponse): GetSongsByTagsResponse.AsObject;
  static serializeBinaryToWriter(message: GetSongsByTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsByTagsResponse;
  static deserializeBinaryFromReader(message: GetSongsByTagsResponse, reader: jspb.BinaryReader): GetSongsByTagsResponse;
}

export namespace GetSongsByTagsResponse {
  export type AsObject = {
    songsList: Array<tensorbeat_common_pb.File.AsObject>,
    nextPageToken: number,
  }
}

export class AddSongsRequest extends jspb.Message {
  getSongsList(): Array<tensorbeat_common_pb.AddFile>;
  setSongsList(value: Array<tensorbeat_common_pb.AddFile>): AddSongsRequest;
  clearSongsList(): AddSongsRequest;
  addSongs(value?: tensorbeat_common_pb.AddFile, index?: number): tensorbeat_common_pb.AddFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSongsRequest): AddSongsRequest.AsObject;
  static serializeBinaryToWriter(message: AddSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSongsRequest;
  static deserializeBinaryFromReader(message: AddSongsRequest, reader: jspb.BinaryReader): AddSongsRequest;
}

export namespace AddSongsRequest {
  export type AsObject = {
    songsList: Array<tensorbeat_common_pb.AddFile.AsObject>,
  }
}

export class AddSongsResponse extends jspb.Message {
  getSuccessful(): boolean;
  setSuccessful(value: boolean): AddSongsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSongsResponse): AddSongsResponse.AsObject;
  static serializeBinaryToWriter(message: AddSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSongsResponse;
  static deserializeBinaryFromReader(message: AddSongsResponse, reader: jspb.BinaryReader): AddSongsResponse;
}

export namespace AddSongsResponse {
  export type AsObject = {
    successful: boolean,
  }
}

export class AddTagsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): AddTagsRequest;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): AddTagsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsRequest): AddTagsRequest.AsObject;
  static serializeBinaryToWriter(message: AddTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsRequest;
  static deserializeBinaryFromReader(message: AddTagsRequest, reader: jspb.BinaryReader): AddTagsRequest;
}

export namespace AddTagsRequest {
  export type AsObject = {
    id: string,
    tagsMap: Array<[string, string]>,
  }
}

export class AddTagsResponse extends jspb.Message {
  getSuccessful(): boolean;
  setSuccessful(value: boolean): AddTagsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddTagsResponse): AddTagsResponse.AsObject;
  static serializeBinaryToWriter(message: AddTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTagsResponse;
  static deserializeBinaryFromReader(message: AddTagsResponse, reader: jspb.BinaryReader): AddTagsResponse;
}

export namespace AddTagsResponse {
  export type AsObject = {
    successful: boolean,
  }
}

export class RemoveTagsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveTagsRequest;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): RemoveTagsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsRequest): RemoveTagsRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsRequest;
  static deserializeBinaryFromReader(message: RemoveTagsRequest, reader: jspb.BinaryReader): RemoveTagsRequest;
}

export namespace RemoveTagsRequest {
  export type AsObject = {
    id: string,
    tagsMap: Array<[string, string]>,
  }
}

export class RemoveTagsResponse extends jspb.Message {
  getSuccessful(): boolean;
  setSuccessful(value: boolean): RemoveTagsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTagsResponse): RemoveTagsResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTagsResponse;
  static deserializeBinaryFromReader(message: RemoveTagsResponse, reader: jspb.BinaryReader): RemoveTagsResponse;
}

export namespace RemoveTagsResponse {
  export type AsObject = {
    successful: boolean,
  }
}

export class GetAllSongsRequest extends jspb.Message {
  getPageToken(): number;
  setPageToken(value: number): GetAllSongsRequest;

  getPageSize(): number;
  setPageSize(value: number): GetAllSongsRequest;

  getPageTokenCase(): GetAllSongsRequest.PageTokenCase;

  getPageSizeCase(): GetAllSongsRequest.PageSizeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSongsRequest): GetAllSongsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSongsRequest;
  static deserializeBinaryFromReader(message: GetAllSongsRequest, reader: jspb.BinaryReader): GetAllSongsRequest;
}

export namespace GetAllSongsRequest {
  export type AsObject = {
    pageToken: number,
    pageSize: number,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 1,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 2,
  }
}

export class GetAllSongsResponse extends jspb.Message {
  getSongsList(): Array<tensorbeat_common_pb.File>;
  setSongsList(value: Array<tensorbeat_common_pb.File>): GetAllSongsResponse;
  clearSongsList(): GetAllSongsResponse;
  addSongs(value?: tensorbeat_common_pb.File, index?: number): tensorbeat_common_pb.File;

  getNextPageToken(): number;
  setNextPageToken(value: number): GetAllSongsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSongsResponse): GetAllSongsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSongsResponse;
  static deserializeBinaryFromReader(message: GetAllSongsResponse, reader: jspb.BinaryReader): GetAllSongsResponse;
}

export namespace GetAllSongsResponse {
  export type AsObject = {
    songsList: Array<tensorbeat_common_pb.File.AsObject>,
    nextPageToken: number,
  }
}

export class GetSongsByIDsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): GetSongsByIDsRequest;
  clearIdsList(): GetSongsByIDsRequest;
  addIds(value: string, index?: number): GetSongsByIDsRequest;

  getPageToken(): number;
  setPageToken(value: number): GetSongsByIDsRequest;

  getPageSize(): number;
  setPageSize(value: number): GetSongsByIDsRequest;

  getPageTokenCase(): GetSongsByIDsRequest.PageTokenCase;

  getPageSizeCase(): GetSongsByIDsRequest.PageSizeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsByIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsByIDsRequest): GetSongsByIDsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSongsByIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsByIDsRequest;
  static deserializeBinaryFromReader(message: GetSongsByIDsRequest, reader: jspb.BinaryReader): GetSongsByIDsRequest;
}

export namespace GetSongsByIDsRequest {
  export type AsObject = {
    idsList: Array<string>,
    pageToken: number,
    pageSize: number,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 2,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 3,
  }
}

export class GetSongsByIDsResponse extends jspb.Message {
  getSongsList(): Array<tensorbeat_common_pb.File>;
  setSongsList(value: Array<tensorbeat_common_pb.File>): GetSongsByIDsResponse;
  clearSongsList(): GetSongsByIDsResponse;
  addSongs(value?: tensorbeat_common_pb.File, index?: number): tensorbeat_common_pb.File;

  getNextPageToken(): number;
  setNextPageToken(value: number): GetSongsByIDsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsByIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsByIDsResponse): GetSongsByIDsResponse.AsObject;
  static serializeBinaryToWriter(message: GetSongsByIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsByIDsResponse;
  static deserializeBinaryFromReader(message: GetSongsByIDsResponse, reader: jspb.BinaryReader): GetSongsByIDsResponse;
}

export namespace GetSongsByIDsResponse {
  export type AsObject = {
    songsList: Array<tensorbeat_common_pb.File.AsObject>,
    nextPageToken: number,
  }
}

export enum Filter { 
  ANY = 0,
  ALL = 1,
  NONE = 2,
}
