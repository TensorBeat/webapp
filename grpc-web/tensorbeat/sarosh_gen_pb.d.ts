import * as jspb from 'google-protobuf'

import * as tensorbeat_common_pb from '../tensorbeat/common_pb';


export class GenerateMusicRequest extends jspb.Message {
  getYtPlaylistUrl(): string;
  setYtPlaylistUrl(value: string): GenerateMusicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateMusicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateMusicRequest): GenerateMusicRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateMusicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateMusicRequest;
  static deserializeBinaryFromReader(message: GenerateMusicRequest, reader: jspb.BinaryReader): GenerateMusicRequest;
}

export namespace GenerateMusicRequest {
  export type AsObject = {
    ytPlaylistUrl: string,
  }
}

export class GenerateMusicResponse extends jspb.Message {
  getSong(): Uint8Array | string;
  getSong_asU8(): Uint8Array;
  getSong_asB64(): string;
  setSong(value: Uint8Array | string): GenerateMusicResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateMusicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateMusicResponse): GenerateMusicResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateMusicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateMusicResponse;
  static deserializeBinaryFromReader(message: GenerateMusicResponse, reader: jspb.BinaryReader): GenerateMusicResponse;
}

export namespace GenerateMusicResponse {
  export type AsObject = {
    song: Uint8Array | string,
  }
}

