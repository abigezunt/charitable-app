require 'spec_helper'

describe LocationsController do
		describe "GET index" do

    it "has a 200 status code" do
      get :index
      expect(response.status).to eq(200)
    end
    
    end
end