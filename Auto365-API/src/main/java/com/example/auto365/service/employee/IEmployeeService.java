package com.example.auto365.service.employee;

import com.example.auto365.model.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IEmployeeService {

    Page<Employee> findAllEmployee(Pageable pageable);
}
