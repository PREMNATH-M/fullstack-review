package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.model;
import com.example.demo.Service.service;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class controller {


@Autowired
service s;

@GetMapping("/get")
public List<model> showDetails() {
return s.getDetails();

}

@PostMapping("/post")
public String addDetails(@RequestBody model m) {
s.add(m);
return "Details added 3" + m.getId();
}
@PutMapping("/updateDetails")
public model updateInfo(@RequestBody model st1)
{
return s.updatedetails(st1);
}

@DeleteMapping("/delete/{Mid}")
public String deleteInfo(@PathVariable("Mid") int Mid)
{
s.deleteDetails(Mid);
return "Deleted details";
}

//sorting
@GetMapping("/show/{field}")
public List<model> getWithSort(@PathVariable String field) {
return s.getSorted(field);
}

// pagination
@GetMapping("/show/{offset}/{pageSize}")   
public List<model> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
return s.getWithPagination(offset, pageSize);
}
}