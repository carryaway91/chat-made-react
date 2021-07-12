@extends('layouts.app')

@section('content')
    <div id="app" authUser='{{ $authUser }}' users='{{ $users }}' />
@endsection
