/**
 * @fileoverview gRPC-Web generated client stub for tensorbeat.recommender
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tensorbeat_recommender_pb from '../tensorbeat/recommender_pb';


export class RecommenderServiceClient {
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

  methodInfoRecommendSong = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_recommender_pb.RecommenderResponse,
    (request: tensorbeat_recommender_pb.RecommenderRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_recommender_pb.RecommenderResponse.deserializeBinary
  );

  recommendSong(
    request: tensorbeat_recommender_pb.RecommenderRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_recommender_pb.RecommenderResponse>;

  recommendSong(
    request: tensorbeat_recommender_pb.RecommenderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_recommender_pb.RecommenderResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_recommender_pb.RecommenderResponse>;

  recommendSong(
    request: tensorbeat_recommender_pb.RecommenderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_recommender_pb.RecommenderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.recommender.RecommenderService/RecommendSong',
        request,
        metadata || {},
        this.methodInfoRecommendSong,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.recommender.RecommenderService/RecommendSong',
    request,
    metadata || {},
    this.methodInfoRecommendSong);
  }

  methodInfoGetSongs = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_recommender_pb.GetSongsResponse,
    (request: tensorbeat_recommender_pb.GetSongsRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_recommender_pb.GetSongsResponse.deserializeBinary
  );

  getSongs(
    request: tensorbeat_recommender_pb.GetSongsRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_recommender_pb.GetSongsResponse>;

  getSongs(
    request: tensorbeat_recommender_pb.GetSongsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_recommender_pb.GetSongsResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_recommender_pb.GetSongsResponse>;

  getSongs(
    request: tensorbeat_recommender_pb.GetSongsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_recommender_pb.GetSongsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.recommender.RecommenderService/GetSongs',
        request,
        metadata || {},
        this.methodInfoGetSongs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.recommender.RecommenderService/GetSongs',
    request,
    metadata || {},
    this.methodInfoGetSongs);
  }

}

