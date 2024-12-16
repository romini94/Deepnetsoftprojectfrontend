import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Container, Card } from "react-bootstrap";
import axios from 'axios'; 

const Menumanage = () => {
  const [menus, setMenus] = useState([]); 
  const [newMenu, setNewMenu] = useState({ name: "", description: "" });
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "" });
  const [selectedMenu, setSelectedMenu] = useState(null); 

  useEffect(() => {
   
    axios.get('http://localhost:4000/menus') 
      .then((response) => {
        setMenus(response.data);
      })
      .catch((error) => console.error("Error fetching menus:", error));
  }, []);

 
  const addMenu = () => {
    if (newMenu.name && newMenu.description) {
      axios.post('http://localhost:4000/create', newMenu)
        .then((response) => {
          setMenus([...menus, response.data]);
          setNewMenu({ name: "", description: "" });
        })
        .catch((error) => alert("Error adding menu: " + error.message));
    } else {
      alert("Please fill in all menu fields.");
    }
  };

 
  const addMenuItem = () => {
    if (newItem.name && newItem.description && newItem.price) {
      axios.post(`http://localhost:4000/menus/${selectedMenu}/items`, newItem)
        .then((response) => {
          setMenus(menus.map(menu =>
            menu._id === selectedMenu ? { ...menu, items: response.data.items } : menu
          ));
          setNewItem({ name: "", description: "", price: "" });
        })
        .catch((error) => alert("Error adding item: " + error.message));
    } else {
      alert("Please fill in all item fields.");
    }
  };

  
  const viewItems = (menuId) => {
    axios.get(`http://localhost:4000/menus/${menuId}/items`)
      .then((response) => {
        const updatedMenus = menus.map(menu =>
          menu._id === menuId ? { ...menu, items: response.data } : menu
        );
        setMenus(updatedMenus);
        setSelectedMenu(menuId);
      })
      .catch((error) => alert("Error fetching items: " + error.message));
  };

  return (
    <Container>
      <h1 className="text-center my-4">Menu Manager</h1>

    
      <Card className="mb-4 p-4">
        <h3>Create New Menu</h3>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Menu Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter menu name"
                value={newMenu.name}
                onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Menu Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter menu description"
                value={newMenu.description}
                onChange={(e) =>
                  setNewMenu({ ...newMenu, description: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col className="d-flex align-items-end">
            <Button onClick={addMenu}>Add Menu</Button>
          </Col>
        </Row>
      </Card>

    
      {menus.map((menu) => (
        <Card key={menu._id} className="mb-4 p-4">
          <h2>{menu.name}</h2>
          <p>{menu.description}</p>
          <Button onClick={() => viewItems(menu._id)}>View Items</Button>

        
          {selectedMenu === menu._id && (
            <div>
              <h4>Add Item</h4>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter item name"
                      value={newItem.name}
                      onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Item Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter item description"
                      value={newItem.description}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter price"
                      value={newItem.price}
                      onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col className="d-flex align-items-end">
                  <Button onClick={addMenuItem}>Add Item</Button>
                </Col>
              </Row>
            </div>
          )}

         
          {menu.items && menu.items.length > 0 ? (
            <div>
              <h4>Menu Items</h4>
              <ul>
                {menu.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.name}</strong> - {item.description} (${item.price})
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No items in this menu.</p>
          )}
        </Card>
      ))}
    </Container>
  );
};

export default Menumanage;
