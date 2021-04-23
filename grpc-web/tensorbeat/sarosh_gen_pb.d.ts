import * as jspb from 'google-protobuf'

import * as tensorbeat_common_pb from '../tensorbeat/common_pb';


export class GenerateMusicRequest extends jspb.Message {
  getNotesList(): Array<string>;
  setNotesList(value: Array<string>): GenerateMusicRequest;
  clearNotesList(): GenerateMusicRequest;
  addNotes(value: string, index?: number): GenerateMusicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateMusicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateMusicRequest): GenerateMusicRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateMusicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateMusicRequest;
  static deserializeBinaryFromReader(message: GenerateMusicRequest, reader: jspb.BinaryReader): GenerateMusicRequest;
}

export namespace GenerateMusicRequest {
  export type AsObject = {
    notesList: Array<string>,
  }
}

export class GenerateMusicResponse extends jspb.Message {
  getNotesList(): Array<string>;
  setNotesList(value: Array<string>): GenerateMusicResponse;
  clearNotesList(): GenerateMusicResponse;
  addNotes(value: string, index?: number): GenerateMusicResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateMusicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateMusicResponse): GenerateMusicResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateMusicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateMusicResponse;
  static deserializeBinaryFromReader(message: GenerateMusicResponse, reader: jspb.BinaryReader): GenerateMusicResponse;
}

export namespace GenerateMusicResponse {
  export type AsObject = {
    notesList: Array<string>,
  }
}

