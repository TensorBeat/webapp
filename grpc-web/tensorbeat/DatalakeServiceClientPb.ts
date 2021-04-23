/**
 * @fileoverview gRPC-Web generated client stub for tensorbeat.datalake
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tensorbeat_datalake_pb from '../tensorbeat/datalake_pb';


export class DatalakeServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetAllSongs = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_datalake_pb.GetAllSongsResponse,
    (request: tensorbeat_datalake_pb.GetAllSongsRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_datalake_pb.GetAllSongsResponse.deserializeBinary
  );

  getAllSongs(
    request: tensorbeat_datalake_pb.GetAllSongsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_datalake_pb.GetAllSongsResponse>;

  getAllSongs(
    request: tensorbeat_datalake_pb.GetAllSongsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.GetAllSongsResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_datalake_pb.GetAllSongsResponse>;

  getAllSongs(
    request: tensorbeat_datalake_pb.GetAllSongsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.GetAllSongsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.datalake.DatalakeService/GetAllSongs',
        request,
        metadata || {},
        this.methodInfoGetAllSongs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.datalake.DatalakeService/GetAllSongs',
    request,
    metadata || {},
    this.methodInfoGetAllSongs);
  }

  methodInfoGetSongsByIDs = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_datalake_pb.GetSongsByIDsResponse,
    (request: tensorbeat_datalake_pb.GetSongsByIDsRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_datalake_pb.GetSongsByIDsResponse.deserializeBinary
  );

  getSongsByIDs(
    request: tensorbeat_datalake_pb.GetSongsByIDsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_datalake_pb.GetSongsByIDsResponse>;

  getSongsByIDs(
    request: tensorbeat_datalake_pb.GetSongsByIDsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.GetSongsByIDsResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_datalake_pb.GetSongsByIDsResponse>;

  getSongsByIDs(
    request: tensorbeat_datalake_pb.GetSongsByIDsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.GetSongsByIDsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.datalake.DatalakeService/GetSongsByIDs',
        request,
        metadata || {},
        this.methodInfoGetSongsByIDs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.datalake.DatalakeService/GetSongsByIDs',
    request,
    metadata || {},
    this.methodInfoGetSongsByIDs);
  }

  methodInfoGetSongsByTags = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_datalake_pb.GetSongsByTagsResponse,
    (request: tensorbeat_datalake_pb.GetSongsByTagsRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_datalake_pb.GetSongsByTagsResponse.deserializeBinary
  );

  getSongsByTags(
    request: tensorbeat_datalake_pb.GetSongsByTagsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_datalake_pb.GetSongsByTagsResponse>;

  getSongsByTags(
    request: tensorbeat_datalake_pb.GetSongsByTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.GetSongsByTagsResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_datalake_pb.GetSongsByTagsResponse>;

  getSongsByTags(
    request: tensorbeat_datalake_pb.GetSongsByTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.GetSongsByTagsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.datalake.DatalakeService/GetSongsByTags',
        request,
        metadata || {},
        this.methodInfoGetSongsByTags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.datalake.DatalakeService/GetSongsByTags',
    request,
    metadata || {},
    this.methodInfoGetSongsByTags);
  }

  methodInfoAddSongs = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_datalake_pb.AddSongsResponse,
    (request: tensorbeat_datalake_pb.AddSongsRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_datalake_pb.AddSongsResponse.deserializeBinary
  );

  addSongs(
    request: tensorbeat_datalake_pb.AddSongsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_datalake_pb.AddSongsResponse>;

  addSongs(
    request: tensorbeat_datalake_pb.AddSongsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.AddSongsResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_datalake_pb.AddSongsResponse>;

  addSongs(
    request: tensorbeat_datalake_pb.AddSongsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.AddSongsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.datalake.DatalakeService/AddSongs',
        request,
        metadata || {},
        this.methodInfoAddSongs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.datalake.DatalakeService/AddSongs',
    request,
    metadata || {},
    this.methodInfoAddSongs);
  }

  methodInfoAddTags = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_datalake_pb.AddTagsResponse,
    (request: tensorbeat_datalake_pb.AddTagsRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_datalake_pb.AddTagsResponse.deserializeBinary
  );

  addTags(
    request: tensorbeat_datalake_pb.AddTagsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_datalake_pb.AddTagsResponse>;

  addTags(
    request: tensorbeat_datalake_pb.AddTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.AddTagsResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_datalake_pb.AddTagsResponse>;

  addTags(
    request: tensorbeat_datalake_pb.AddTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.AddTagsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.datalake.DatalakeService/AddTags',
        request,
        metadata || {},
        this.methodInfoAddTags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.datalake.DatalakeService/AddTags',
    request,
    metadata || {},
    this.methodInfoAddTags);
  }

  methodInfoRemoveTags = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_datalake_pb.RemoveTagsResponse,
    (request: tensorbeat_datalake_pb.RemoveTagsRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_datalake_pb.RemoveTagsResponse.deserializeBinary
  );

  removeTags(
    request: tensorbeat_datalake_pb.RemoveTagsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_datalake_pb.RemoveTagsResponse>;

  removeTags(
    request: tensorbeat_datalake_pb.RemoveTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.RemoveTagsResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_datalake_pb.RemoveTagsResponse>;

  removeTags(
    request: tensorbeat_datalake_pb.RemoveTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_datalake_pb.RemoveTagsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.datalake.DatalakeService/RemoveTags',
        request,
        metadata || {},
        this.methodInfoRemoveTags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.datalake.DatalakeService/RemoveTags',
    request,
    metadata || {},
    this.methodInfoRemoveTags);
  }

}

