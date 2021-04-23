/**
 * @fileoverview gRPC-Web generated client stub for tensorbeat.sarosh_gen
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tensorbeat_sarosh_gen_pb from '../tensorbeat/sarosh_gen_pb';


export class SaroshGeneratorClient {
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

  methodInfoGenerateMusic = new grpcWeb.AbstractClientBase.MethodInfo(
    tensorbeat_sarosh_gen_pb.GenerateMusicResponse,
    (request: tensorbeat_sarosh_gen_pb.GenerateMusicRequest) => {
      return request.serializeBinary();
    },
    tensorbeat_sarosh_gen_pb.GenerateMusicResponse.deserializeBinary
  );

  generateMusic(
    request: tensorbeat_sarosh_gen_pb.GenerateMusicRequest,
    metadata: grpcWeb.Metadata | null): Promise<tensorbeat_sarosh_gen_pb.GenerateMusicResponse>;

  generateMusic(
    request: tensorbeat_sarosh_gen_pb.GenerateMusicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tensorbeat_sarosh_gen_pb.GenerateMusicResponse) => void): grpcWeb.ClientReadableStream<tensorbeat_sarosh_gen_pb.GenerateMusicResponse>;

  generateMusic(
    request: tensorbeat_sarosh_gen_pb.GenerateMusicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tensorbeat_sarosh_gen_pb.GenerateMusicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tensorbeat.sarosh_gen.SaroshGenerator/GenerateMusic',
        request,
        metadata || {},
        this.methodInfoGenerateMusic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tensorbeat.sarosh_gen.SaroshGenerator/GenerateMusic',
    request,
    metadata || {},
    this.methodInfoGenerateMusic);
  }

}

