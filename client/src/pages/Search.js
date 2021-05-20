
import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
 
//   const [formObject, setFormObject] = useState({})

  const [query, setQuery] = useState("")

  // Load all books and store them with setBooks
  
  // Loads all books and sets them to books
  function searchGoogleBooks() {
    API.search(query)
    .then(res => {console.log(res)})
  
  };


    return (
      <Container fluid>
        <Row>

          <Col size="md-6">
            <Jumbotron>
              <h1>Please search a google book</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
               
                onClick={() => {
                    searchGoogleBooks()
                }}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {/* {books.length ? ( */}
              <List>
               
                  return (
                    <ListItem >
                      <a href={""}>
                        <strong>
                          {} by {}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })
              </List>
             : (
              <h3>No Results to Display</h3>
            )
          </Col>
        </Row>
      </Container>
    );
  }

  export default Search;