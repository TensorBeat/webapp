import * as jspb from 'google-protobuf'

import * as tensorbeat_common_pb from '../tensorbeat/common_pb';


export class GetSongsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsRequest): GetSongsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsRequest;
  static deserializeBinaryFromReader(message: GetSongsRequest, reader: jspb.BinaryReader): GetSongsRequest;
}

export namespace GetSongsRequest {
  export type AsObject = {
  }
}

export class GetSongsResponse extends jspb.Message {
  getSongNameList(): Array<string>;
  setSongNameList(value: Array<string>): GetSongsResponse;
  clearSongNameList(): GetSongsResponse;
  addSongName(value: string, index?: number): GetSongsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsResponse): GetSongsResponse.AsObject;
  static serializeBinaryToWriter(message: GetSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsResponse;
  static deserializeBinaryFromReader(message: GetSongsResponse, reader: jspb.BinaryReader): GetSongsResponse;
}

export namespace GetSongsResponse {
  export type AsObject = {
    songNameList: Array<string>,
  }
}

export class RecommenderRequest extends jspb.Message {
  getSongName(): string;
  setSongName(value: string): RecommenderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommenderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecommenderRequest): RecommenderRequest.AsObject;
  static serializeBinaryToWriter(message: RecommenderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommenderRequest;
  static deserializeBinaryFromReader(message: RecommenderRequest, reader: jspb.BinaryReader): RecommenderRequest;
}

export namespace RecommenderRequest {
  export type AsObject = {
    songName: string,
  }
}

export class RecommenderResponse extends jspb.Message {
  getSongsList(): Array<string>;
  setSongsList(value: Array<string>): RecommenderResponse;
  clearSongsList(): RecommenderResponse;
  addSongs(value: string, index?: number): RecommenderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommenderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecommenderResponse): RecommenderResponse.AsObject;
  static serializeBinaryToWriter(message: RecommenderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommenderResponse;
  static deserializeBinaryFromReader(message: RecommenderResponse, reader: jspb.BinaryReader): RecommenderResponse;
}

export namespace RecommenderResponse {
  export type AsObject = {
    songsList: Array<string>,
  }
}

