import React from 'react'
import renderer from 'react-test-renderer'
import App from '../component/app'

describe('components',function(){
    describe('App test ',function(){
        it('renders correctly',function(){
        var domtree = renderer.create(<App/>).toJSON();
        expect(domtree).toMatchSnapshot();
       });
    });
});